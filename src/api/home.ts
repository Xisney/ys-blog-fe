import { httpRequest } from '.'
import { load as poemApi } from 'jinrishici'
import { AxiosPromise } from 'axios'
export interface HomeBaseData {
  notice: string
  blogInfo: {
    viewCount: number
    runTime: number
  }
}

export function getHomeBaseData(): AxiosPromise<HomeBaseData> {
  return httpRequest('/home/base')
}

export function getHomePoemData(): any {
  return new Promise((resolve, reject) => {
    poemApi(
      (res) => {
        resolve({ data: res.data.content })
      },
      (e) => {
        reject({ message: e.errMessage })
      }
    )
  })
}
