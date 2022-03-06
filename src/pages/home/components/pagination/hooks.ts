import { useMemo } from 'react'
import { getOrderedArray } from './utils'

export function usePageNum(total: number, pageSize: number) {
  const pageNum = useMemo(() => Math.floor(total / pageSize), [total, pageSize])
  return pageNum
}

const Max_Page_Item = 7
export const Next_Five = -2
export const Pre_Five = -1

export function usePageNumArray(
  current: number,
  pageNum: number
): Array<number> {
  if (pageNum <= Max_Page_Item) {
    return getOrderedArray(pageNum)
  } else {
    const left = current - 1
    const right = pageNum - current

    if (left <= 3) {
      const res = getOrderedArray(Max_Page_Item)
      res[Max_Page_Item - 1] = pageNum
      res[Max_Page_Item - 2] = Next_Five
      return res
    } else if (right <= 3) {
      const res = getOrderedArray(pageNum - Max_Page_Item, pageNum)
      res[0] = 1
      res[1] = Pre_Five
      return res
    } else {
      const res = getOrderedArray(current - 2, current + 2)
      res.unshift(1, Pre_Five)
      res.push(Next_Five, pageNum)
      return res
    }
  }
}
