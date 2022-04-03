import { AxiosPromise } from 'axios'
import { httpRequest } from '.'

export interface AboutData {
  code: number
  data: string
}

export function getAboutData(): AxiosPromise<AboutData> {
  return httpRequest('/about')
}
