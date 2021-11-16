import request, { RequestOptionsInit, RequestResponse } from 'umi-request';
import queryString from 'query-string';
// 处理数据 转换
request.interceptors.request.use((url, options: RequestOptionsInit) => {
  const { requestType, headers, body, ...rest } = options;
  let head = { ...(headers || {}) };
  let data = body;
  if (requestType === 'json') {
    head = {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      ...head,
    };
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
  } else if (requestType === 'form') {
    head = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      ...head,
    };
    data = typeof data === 'string' ? data : queryString.stringify(data);
  } else {
    head = {
      Accept: 'application/json',
      ...head,
    };
  }

  return {
    url: url,
    options: {
      requestType,
      headers: { ...head },
      body: data,
      ...rest,
    },
  };
});

request.interceptors.response.use((response: RequestResponse['response']) => {
  return response;
});

export default request;
