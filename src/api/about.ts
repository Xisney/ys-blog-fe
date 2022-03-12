import { AxiosPromise } from 'axios'
import { httpRequest } from '.'

export interface AboutData {
  groupData: {
    value: number
    name: string
  }[]
  aboutData: string
}

export function getAboutData(): AxiosPromise<AboutData> {
  return httpRequest('/about')
}
