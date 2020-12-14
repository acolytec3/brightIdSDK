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
  try {
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
        res = await axios.put(
          `${endpoint}/${context}/link/${contextId}`,
          null,
          {
            params: { testingKey },
          }
        );
        break;
      default:
        return {};
    }
    console.log(res);
    return {
      status: res.status,
      statusText: "testBlock operation submitted to node successfully",
      data: res.data,
    };
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.status,
      statusText: err.response.statusText,
      data: err.response.data,
    };
  }
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
  try {
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
    return {
      status: res.status,
      statusText: "remove testBlock operation submitted to node successfully",
      data: res.data,
    };
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.status,
      statusText: err.response.statusText,
      data: err.response.data,
    };
  }
};
