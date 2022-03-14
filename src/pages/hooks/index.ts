import { AxiosError, AxiosPromise } from 'axios'
import { useEffect, useState } from 'react'

export function useGetData<T = any>(getData: () => AxiosPromise<T>) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<AxiosError>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    getData()
      .then(({ data }) => {
        if (mounted) setData(data)
      })
      .catch((e: AxiosError) => {
        if (mounted) setError(e)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [])

  return [data, loading, error]
}
