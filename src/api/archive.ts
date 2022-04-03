import { httpRequest } from '.'

export interface ArchiveItem {
  archiveTime: string
  blogs: {
    id: number
    publishTime: Date
    title: string
    tags: { label: string; id: number }[]
    group: { label: string; id: number }
  }[]
}
export interface ArchiveData {
  code: number
  data: ArchiveItem[]
}

export function getArchiveData() {
  return httpRequest('/archive')
}
