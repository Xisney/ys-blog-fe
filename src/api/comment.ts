import { httpPostJsonRequest, httpRequest } from '.'

export interface CommentData {
  id: number
  parentId: number
  content: string
  avatar: string
  nickname: string
  email: string
  homepage: string
  isAdmin: boolean
  publishTime: string
}

export interface RequestCommentData {
  code: number
  data: CommentData[]
}

export function getCommentData() {
  return httpRequest('/comment')
}

export function getAvatarData(qqNumber: string) {
  return httpRequest(`https://q1.qlogo.cn/g?b=qq&nk=${qqNumber}&s=640`)
}

export type SendCommentData = Omit<CommentData, 'id' | 'publishTime'>

export function sendComment(data: SendCommentData) {
  return httpPostJsonRequest('sendCommit', data)
}
