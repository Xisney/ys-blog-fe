export function throttle(
  fn: Function,
  interval: number = 500,
  ...args: any
): EventListenerOrEventListenerObject {
  let flag = true
  return () => {
    if (!flag) return

    flag = false
    setTimeout(() => {
      fn(...args)
      flag = true
    }, interval)
  }
}

export function debounce(
  fn: Function,
  interval: number = 500,
  ...args: any
): EventListenerOrEventListenerObject {
  let timer: number
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, interval)
  }
}
