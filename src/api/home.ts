import { httpRequest } from '.'
import { load as poemApi } from 'jinrishici'
import { AxiosPromise } from 'axios'
export interface HomeBaseData {
  code: number
  data: {
    notice: string
    viewCount: number
    lastModify: string
    startTime: number
    blogCount: number
  }
}

export function getHomeBaseData(): AxiosPromise<HomeBaseData> {
  return httpRequest('baseInfo')
}

export function getHomePoemData(): any {
  return new Promise((resolve, reject) => {
    poemApi(
      res => {
        resolve({ data: res.data.content })
      },
      e => {
        reject({ message: e.errMessage })
      }
    )
  })
}
