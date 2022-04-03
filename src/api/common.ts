import { httpRequest } from '.'

export function getGroupsAndTags() {
  return httpRequest('/groupAndTags')
}

export interface ArticleList {
  code: number
  data: {
    title: string
    tags: { label: string; id: number }[]
    group: { label: string; id: number }
    publishTime: string
    viewCount: number
    id: number
    description: string
  }[]
}

export function getArticleList() {
  return httpRequest('/blogList')
}
