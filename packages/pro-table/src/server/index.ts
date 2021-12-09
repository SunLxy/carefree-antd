import { RequestOptionsInit } from 'umi-request';
import request from './request';

const API_POST = (
  url: string,
  options: RequestOptionsInit & { module?: string },
) => request(url, { ...(options || {}), method: 'POST' });

const API_GET = (
  url: string,
  options: RequestOptionsInit & { module?: string },
) => request(url, { ...(options || {}), method: 'GET' });

const API_DELETE = (
  url: string,
  options: RequestOptionsInit & { module?: string },
) => request(url, { ...(options || {}), method: 'DELETE' });

const API_PUT = (
  url: string,
  options: RequestOptionsInit & { module?: string },
) => request(url, { ...(options || {}), method: 'PUT' });

const API_PATCH = (
  url: string,
  options: RequestOptionsInit & { module?: string },
) => request(url, { ...(options || {}), method: 'PATCH' });

const API_HEAD = (
  url: string,
  options: RequestOptionsInit & { module?: string },
) => request(url, { ...(options || {}), method: 'HEAD' });

const API_OPTIONS = (
  url: string,
  options: RequestOptionsInit & { module?: string },
) => request(url, { ...(options || {}), method: 'OPTIONS' });

export default {
  POST: API_POST,
  GET: API_GET,
  DELETE: API_DELETE,
  PUT: API_PUT,
  PATCH: API_PATCH,
  HEAD: API_HEAD,
  OPTIONS: API_OPTIONS,
};
