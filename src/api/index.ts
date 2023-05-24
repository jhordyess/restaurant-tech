import axios, { AxiosResponse } from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
  responseType: "json",
});

const getRequestConfiguration = (authorization: string) => {
  const headers = {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  if (authorization) headers["Authorization"] = `Bearer ${authorization}`;
  return { headers };
};

type TMakeRequest = {
  url: string;
  values: Object;
  requestType?: "GET" | "POST" | "DELETE";
  authorization?: string;
};

export const makeRequest = ({
  url,
  values,
  requestType = "GET",
  authorization = null,
}: TMakeRequest) => {
  const requestConfiguration = getRequestConfiguration(authorization);
  switch (requestType) {
    case "GET":
      return API.get(url, requestConfiguration);
    case "POST":
      return API.post(url, values, requestConfiguration);
    case "DELETE":
      return API.delete(url, requestConfiguration);
    default:
      return;
  }
};

export function fakeRequest<T>(dummyData: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 500);
  });
}
