import { httpRequest } from '.'

export function getHomeData() {
  return httpRequest('/archive')
}
