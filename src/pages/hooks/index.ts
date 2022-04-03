import { getGroupsAndTags } from '@src/api/common'
import { AxiosError, AxiosPromise } from 'axios'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { groupsAndTagsAtom } from '@src/atom'

let isFetchCommonData = false

export function useGetData(
  getData: (() => AxiosPromise) | Array<() => AxiosPromise>
): any {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<AxiosError>()
  const [loading, setLoading] = useState(true)
  const setGtData = useSetRecoilState(groupsAndTagsAtom)

  useEffect(() => {
    let mounted = true

    // 特定数据处理
    const givenData = Array.isArray(getData)
      ? Promise.all(getData.map(v => v()))
      : getData()

    // 公共数据处理
    const commonData = isFetchCommonData
      ? Promise.resolve('done')
      : Promise.all([getGroupsAndTags()])

    Promise.all([givenData, commonData])
      .then(([givenData, commonData]) => {
        if (mounted) {
          // 特定数据处理

          setData(
            Array.isArray(givenData)
              ? givenData.map(v => v.data)
              : givenData.data
          )

          // 通用数据处理
          if (typeof commonData === 'object') {
            setGtData(commonData[0].data)
            isFetchCommonData = true
          }
        }
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

  return [data, loading, error, setData]
}
