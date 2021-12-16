import request, { RequestOptionsInit } from 'umi-request';
import queryString from 'query-string';
const API_Request = (
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
  return request(path, {
    requestType,
    headers: { ...head },
    data: body,
    ...rest,
  });
};
export default API_Request;
