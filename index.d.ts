declare module '*.module.less' {
  const obj: Record<string, string>
  export default obj
}

declare module '*.svg' {
  const path: string
  export default path
}

declare module 'jinrishici' {
  const load: (onSuccess: (res: any) => void, onError: (e: any) => void) => void

  export { load }
}
