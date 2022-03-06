import { FC, useEffect, useMemo, useState } from 'react'
import {
  LeftOutlined,
  RightOutlined,
  EllipsisOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons'
import classnames from 'classnames'
import { usePageNum, usePageNumArray, Pre_Five, Next_Five } from './hooks'
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
  const pageNumArray = useMemo(
    () => usePageNumArray(current, pageNum),
    [current, pageNum]
  )

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
        {pageNumArray.map(v => {
          switch (v) {
            case Pre_Five:
              return (
                <span className="page-opts" key={v}>
                  <EllipsisOutlined className="page-ellipsis" />
                  <DoubleLeftOutlined
                    className="page-turning"
                    onClick={() => {
                      setCurrent(Math.max(1, current - 5))
                    }}
                  />
                </span>
              )
            case Next_Five:
              return (
                <span className="page-opts" key={v}>
                  <EllipsisOutlined className="page-ellipsis" />
                  <DoubleRightOutlined
                    className="page-turning"
                    onClick={() => {
                      setCurrent(Math.min(pageNum, current + 5))
                    }}
                  />
                </span>
              )
            default:
              return (
                <span
                  key={v}
                  onClick={e => {
                    setCurrent(
                      parseInt((e.target as HTMLSpanElement).innerText)
                    )
                  }}
                  className={classnames({ 'active-page': current === v })}
                >
                  {v}
                </span>
              )
          }
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
