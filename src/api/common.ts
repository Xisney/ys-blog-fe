import { httpRequest } from '.'

export function getGroupsAndTags() {
  return httpRequest('/filter')
}

export interface ArticleList {
  listTotalPage: number
  dataList: {
    title: string
    tags: { label: string; id: string }[]
    group: { label: string; id: string }
    publishTime: number
    viewCount: number
    id: string
    description: string
  }[]
}

export function getArticleList(pageNum?: number) {
  return httpRequest('/list', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      listPageNum: pageNum,
    },
  })
}
