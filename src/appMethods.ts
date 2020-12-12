import axios from "axios";
import stringify from "fast-json-stable-stringify";
import B64 from "base64-js";
import nacl from "tweetnacl";

export const generateDeeplink = (
  context: string,
  contextId: string,
  nodeUrl?: string
): string => {
  const endpoint = nodeUrl ? nodeUrl : `http:%2f%2fnode.brightid.org`;
  return `brightid://link-verification/${endpoint}/${context}/${contextId}`;
};

export const verifyContextId = async (
  context: string,
  contextId: string,
  nodeUrl?: string
): Promise<any> => {
  const endpoint = nodeUrl
    ? nodeUrl + "/node/v5/verifications"
    : "https://app.brightid.org/node/v5/verifications";
  try {
    const res = await axios.get(`${endpoint}/${context}/${contextId}`);
    console.log(res.data);
    return res.data.data;
  } catch (err) {
    console.log(err.response);
    return { unique: false };
  }
};

export const sponsor = async (
  key: string,
  context: string,
  contextId: string,
  nodeUrl?: string
): Promise<any> => {
  const endpoint = nodeUrl
    ? nodeUrl + `/node/v5/operations`
    : "https://app.brightid.org/node/v5/operations";
  let sponsorships = await availableSponsorships(context, nodeUrl);

  if (sponsorships < 1) {
    return { status: "error", statusReason: "no available sponsorships" };
  }

  const op = {
    name: "Sponsor",
    app: context,
    contextId: contextId,
    timestamp: Date.now(),
    v: 5,
    sig: "",
  };

  const message = getMessage(op);
  const arrayedMessage = Buffer.from(message);
  const keyBuffer = B64.toByteArray(key);
  let signature = nacl.sign.detached(arrayedMessage, keyBuffer);
  op.sig = B64.fromByteArray(signature);
  console.log(op);
  try {
    let res = await axios.post(endpoint, op);
    console.log(res);
    return { status: "success", statusReason: res.data.data.hash };
  } catch (err) {
    console.log(err.response);
  }
};

const getMessage = (op: any) => {
  const signedOp: any = {};
  for (let k in op) {
    if (["sig", "sig1", "sig2", "hash"].includes(k)) {
      continue;
    }
    signedOp[k] = op[k];
  }
  return stringify(signedOp);
};

export const availableSponsorships = async (
  context: string,
  nodeUrl?: string
): Promise<number> => {
  const endpoint = nodeUrl
    ? nodeUrl + `/node/v5/testblocks`
    : "https://app.brightid.org/node/v5/apps";
  try {
    let res = await axios.get(`${endpoint}/${context}`);
    console.log(res);
    return res.data.data.unusedSponsorships;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};
