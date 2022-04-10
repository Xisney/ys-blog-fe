import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = import.meta.env.PROD
  ? 'http://47.107.76.201/api/blog'
  : 'http://localhost:3001/api/blog'

const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 9000,
  withCredentials: import.meta.env.DEV,
})

export function httpRequest(url: string, config?: AxiosRequestConfig) {
  return apiInstance(url, config)
}

export function httpPostJsonRequest(url: string, data: any) {
  return apiInstance(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    data,
  })
}
