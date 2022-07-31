import request, { RequestOptionsInit } from 'umi-request';
import queryString from 'query-string';
import { notification } from 'antd';

type CodeMsg = {
  [key: number]: string;
};

const codeMessage: CodeMsg = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const ErrorTip = (response: Response) => {
  if (response && response.status) {
    const errorText =
      codeMessage[response.status] || response.statusText || '请求错误';
    const { status, url } = response;
    notification.error({
      message: `请求错误 ${status}:${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '网络发生异常 无法连接服务器',
      message: '网络发生异常',
    });
  }
};

request.interceptors.request.use(
  (url: string, options: RequestOptionsInit & { module?: string }) => {
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
    return {
      url: path,
      options: {
        requestType,
        headers: { ...head },
        data: body,
        ...rest,
      },
    };
  },
);

request.interceptors.response.use(async (response: Response) => {
  const errorText = codeMessage[response.status] || response.statusText;
  if (response.status !== 200 && errorText) {
    ErrorTip(response);
  }
  return response;
});

export default request;
