import { atom } from 'recoil'

interface GroupsAndTags {
  groups: {
    label: string
    id: string
  }[]
  tags: {
    label: string
    id: string
  }[]
}

export const groupsAndTagsAtom = atom<GroupsAndTags | null>({
  key: 'groupAndTagsAtom',
  default: null,
})
