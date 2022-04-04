import { httpPostJsonRequest } from '.'

export function getBlogContent(data: { id: number }) {
  return httpPostJsonRequest('blog', data)
}
