export function getOrderedArray(length: number): Array<number>
export function getOrderedArray(start: number, end: number): Array<number>
export function getOrderedArray(start: number, end?: number): Array<number> {
  if (end === undefined)
    return Array(start)
      .fill(0)
      .map((_, i) => i + 1)

  const res = []
  for (let i = 0; i <= end - start; i++) {
    res[i] = start + i
  }
  return res
}
