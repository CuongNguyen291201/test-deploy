import fetch from "isomorphic-fetch";
import qs from "query-string";

export class FetchError extends Error {
  constructor(msg?: string) {
    super();
    this.name = "FetchError",
      this.message = msg ?? "";
  }
}

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
}

export type RequestData = {
  endpoint: string;
  method?: "GET" | "POST",
  body?: any;
  customHeaders: any;
  bodyType?: "json" | "multipart",
  responseType?: "json" | "buffer"
  withCredentials?: boolean;
};

const request = async (args: RequestData) => {
  const {
    endpoint,
    method = "GET",
    body,
    customHeaders = {},
    withCredentials = false,
    bodyType = "json",
    responseType = "json"
  } = args;
  let _endpoint = endpoint;
  if (!endpoint.startsWith("http")) {
    _endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT || 'http://localhost:3001'}${endpoint}`;
  }
  const headers = {
    ...defaultHeaders,
    ...customHeaders,
  }
  if (method === "POST" && bodyType === "multipart") headers["Content-Type"] = "multipart/form-data";
  try {
    const response = await fetch(_endpoint, {
      method,
      headers,
      body: body ? (bodyType === "multipart" ? body : JSON.stringify(body)) : null,
      credentials: withCredentials ? "include" : "omit"
    });
    const data = responseType === "buffer" ? await response.arrayBuffer() : await response.json();
    return {
      status: response.status,
      data
    }
  } catch (error) {
    throw new FetchError(error?.message ?? 'Unexpected Error');
  }
}

export const get = (args: Omit<RequestData, "method" | "body"> & { params: any }) => {
  const { endpoint, params, ...rest } = args;
  let _endpoint = endpoint;
  if (params && !(params.constructor === Object && !Object.keys(params).length)) {
    _endpoint += `?${qs.stringify(params, { encode: true })}`;
  }
  return request({ endpoint: _endpoint, ...rest });
}

export const post = (args: Omit<RequestData, "method">) => {
  return request({ method: "POST", ...args });
}
