import { AxiosPromise } from 'axios'
import { useEffect, useState } from 'react'

export function useGetData<T = any>(getData: () => AxiosPromise<T>) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData().then(({ data }) => {
      setData(data)
      setLoading(false)
    })
  }, [])

  return [data, loading]
}
