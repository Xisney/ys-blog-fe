import { atom } from 'recoil'

interface GroupsAndTags {
  code: number
  data: {
    groups: {
      label: string
      id: number
      blogNum: number
    }[]
    tags: {
      label: string
      id: number
    }[]
  }
}

export const groupsAndTagsAtom = atom<GroupsAndTags | null>({
  key: 'groupAndTagsAtom',
  default: null,
})
