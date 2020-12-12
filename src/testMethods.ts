import axios, { AxiosResponse } from "axios";

export const putTestingBlock = async (
  operation: string,
  testingKey: string,
  context: string,
  contextId: string,
  nodeUrl?: string
): Promise<any> => {
  const endpoint = nodeUrl
    ? nodeUrl + `/node/v5/testblocks`
    : "https://app.brightid.org/node/v5/testblocks";
  let res: AxiosResponse;
  switch (operation) {
    case "verification":
      res = await axios.put(
        `${endpoint}/${context}/verification/${contextId}`,
        null,
        { params: { testingKey } }
      );
      break;
    case "sponsorship":
      res = await axios.put(
        `${endpoint}/${context}/sponsorship/${contextId}`,
        null,
        { params: { testingKey } }
      );
      break;
    case "link":
      res = await axios.put(`${endpoint}/${context}/link/${contextId}`, null, {
        params: { testingKey },
      });
      break;
    default:
      return {};
  }
  console.log(res);
  return res.data;
};

export const removeTestingBlock = async (
  operation: string,
  testingKey: string,
  context: string,
  contextId: string,
  nodeUrl?: string
): Promise<any> => {
  const endpoint = nodeUrl
    ? nodeUrl + `/node/v5/testblocks`
    : "https://app.brightid.org/node/v5/testblocks";
  let res: AxiosResponse;
  switch (operation) {
    case "verification":
      res = await axios.delete(
        `${endpoint}/${context}/verification/${contextId}`,
        { params: { testingKey } }
      );
      break;
    case "sponsorship":
      res = await axios.delete(
        `${endpoint}/${context}/sponsorship/${contextId}`,
        { params: { testingKey } }
      );
      break;
    case "link":
      res = await axios.delete(`${endpoint}/${context}/link/${contextId}`, {
        params: { testingKey },
      });
      break;
    default:
      return {};
  }
  console.log(res);
  return res.data;
};
