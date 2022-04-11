export function throttle(
  fn: Function,
  interval: number = 500,
  ...args: any
): any {
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

export function debounce(fn: Function, interval: number = 500): any {
  let timer: number
  return (...args: any) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, interval)
  }
}

export function isValidEmail(data: string) {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(data)
}

export function isValidQQ(data: string) {
  return /^[1-9][0-9]{4,}$/.test(data)
}

export function isValidUrl(data: string) {
  return /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(
    data
  )
}

export function openUrlBlank(url: string) {
  const a = document.createElement('a')
  a.href = url
  a.target = '_blank'
  a.click()
}

export function publishTimeCmp(a: any, b: any) {
  return new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime()
}
