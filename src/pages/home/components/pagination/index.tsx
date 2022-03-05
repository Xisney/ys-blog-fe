import { FC, useEffect, useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import classnames from 'classnames'
import { usePageNum } from './hooks'
import style from './style.module.less'

interface PaginationProps {
  onChange: (page: number) => any
  pageSize?: number
  total: number
  defaultCurrent?: number
}

const Pagination: FC<PaginationProps> = ({
  onChange,
  total,
  pageSize = 10,
  defaultCurrent = 1,
}) => {
  const [current, setCurrent] = useState(defaultCurrent)
  const pageNum = usePageNum(total, pageSize)

  useEffect(() => {
    onChange(current)
  }, [current])

  return (
    <div className={style['pagination-container']}>
      <div className="page-inner">
        <span
          className={classnames('page-pre', { 'page-disabled': current <= 1 })}
          onClick={() => {
            if (current <= 1) return

            setCurrent(current - 1)
          }}
        >
          <LeftOutlined />
        </span>
        {Array(pageNum)
          .fill(0)
          .map((_, i) => {
            return (
              <span
                key={i}
                onClick={e => {
                  setCurrent(parseInt((e.target as HTMLSpanElement).innerText))
                }}
              >
                {i + 1}
              </span>
            )
          })}
        <span
          className={classnames('page-next', {
            'page-disabled': current === pageNum,
          })}
          onClick={() => {
            if (current >= pageNum) return

            setCurrent(current + 1)
          }}
        >
          <RightOutlined />
        </span>
      </div>
    </div>
  )
}

export default Pagination
