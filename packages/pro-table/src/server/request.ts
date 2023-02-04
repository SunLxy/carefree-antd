import queryString from 'query-string';
import request, { RequestOptionsInit } from 'umi-request';

declare global {
  interface Window {
    RequestResponse: Response;
  }
}
const API_Request = async (
  url: string,
  options: RequestOptionsInit & { module?: string },
) => {
  const { requestType, headers, data, module, ...rest } = options;
  let head = { ...(headers || {}) };
  let body = data;
  if (requestType === 'json') {
    head = {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      ...head,
    };
    if (typeof body !== 'string') {
      body = JSON.stringify(body);
    }
  } else if (requestType === 'form') {
    head = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      ...head,
    };
    body = typeof body === 'string' ? body : queryString.stringify(body);
  } else {
    head = {
      Accept: 'application/json',
      ...head,
    };
  }
  let path = url;
  if (process.env.NODE_ENV === 'production' && module) {
    const pre = /^\//.test(url);
    path = `/${module}${pre ? '' : '/'}${url}`;
  }
  try {
    const responseData = await request(path, {
      requestType,
      headers: { ...head },
      data: body,
      ...rest,
      getResponse: true,
    });
    console.log(
      '添加getResponse返回数据格式数据,可使用window.RequestResponse获取返回response--->',
      responseData,
    );
    window.RequestResponse = responseData.response;
    return responseData.data;
  } catch (err) {
    throw err;
  }
};
export default API_Request;
