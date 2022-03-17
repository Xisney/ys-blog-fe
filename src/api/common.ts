import { httpRequest } from '.'

export function getGroupsAndTags() {
  return httpRequest('/filter')
}
