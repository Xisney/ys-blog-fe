import { useRef } from 'react'

export function usePageNum(total: number, pageSize: number) {
  const pageNumRef = useRef(Math.floor(total / pageSize))
  return pageNumRef.current
}
