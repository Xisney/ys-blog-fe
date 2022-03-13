import { httpRequest } from '.'

export interface ArchiveData {
  archiveTime: string
  articles: {
    id: string
    timeStamp: number
    title: string
  }
}

export function getArchiveData() {
  return httpRequest('/archive')
}
