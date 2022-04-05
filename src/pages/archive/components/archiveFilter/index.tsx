import { ArchiveItem } from '@src/api/archive'
import { FC, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import BaseFilter from '../baseFilter'
import style from './style.module.less'

interface ArchiveFilterProps {
  groups: { label: string; blogNum: number }[]
  tags: { label: string }[]
  setData: (data: any) => void
  data: ArchiveItem[]
}

const ArchiveFilter: FC<ArchiveFilterProps> = ({
  groups,
  tags,
  setData,
  data,
}) => {
  const stateRef = useRef([])
  const cacheRef = useRef<ArchiveItem[]>(data)

  const { state } = useLocation()

  const changeLabel = (label: string) => {
    const originData = cacheRef.current
    setData({
      data: originData
        .map(({ archiveTime, blogs }) => {
          return {
            archiveTime,
            blogs: blogs.filter(({ group }) => group.label === label),
          }
        })
        .filter(v => v.blogs.length !== 0),
    })
  }

  useEffect(() => {
    if (!state) return

    changeLabel(state as string)
  }, [])

  const handleGroupChange = (label: string | string[]) => {
    const originData = cacheRef.current

    if (!label || label.length === 0) {
      setData({ data: originData })
      return
    }

    if (typeof label === 'string') {
      changeLabel(label)
    } else if (Array.isArray(label)) {
      setData({
        data: originData
          .map(({ archiveTime, blogs }) => {
            return {
              archiveTime,
              blogs: blogs.filter(({ tags }) => {
                const target = tags.map(({ label }) => label)

                for (let i = 0; i < label.length; i++) {
                  if (target.includes(label[i])) {
                    return true
                  }
                }

                return false
              }),
            }
          })
          .filter(v => v.blogs.length !== 0),
      })
    }
  }

  return (
    <div className={style['archiveFilter-container']}>
      <div className="archiveFilter-item">
        分组筛选：
        <BaseFilter
          data={groups}
          placeHolder="请选择文章分组"
          apisRef={stateRef}
          onChange={handleGroupChange}
          defaultSelect={state as string}
        />
      </div>
      <div className="archiveFilter-item">
        标签筛选：
        <BaseFilter
          data={tags}
          multiple
          placeHolder="请选择文章标签"
          apisRef={stateRef}
          onChange={handleGroupChange}
        />
      </div>
    </div>
  )
}

export default ArchiveFilter
