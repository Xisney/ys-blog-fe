import { httpRequest } from '.'

export interface CommentData {
  id: string
  parentId: string
  content: string
  creator: {
    avatar: string
    nickname: string
    mail: string
    homePage: string
    isAdmin: boolean
  }
  publishTime: number
}

export function getCommentData() {
  return httpRequest('/about')
}

export function getAvatarData(qqNumber: string) {
  return httpRequest(`https://q1.qlogo.cn/g?b=qq&nk=${qqNumber}&s=640`)
}
