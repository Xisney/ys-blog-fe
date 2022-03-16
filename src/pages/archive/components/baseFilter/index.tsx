import { FC, useEffect, useState, MutableRefObject } from 'react'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import style from './style.module.less'

interface BaseFilterProps {
  multiple?: boolean
  placeHolder?: string
  data: string[]
  onChange?: (data: any) => void
  apisRef: MutableRefObject<any[]>
}

const BaseFilter: FC<BaseFilterProps> = ({
  multiple,
  data,
  placeHolder,
  apisRef,
}) => {
  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState<string>()
  const [multipleSelected, setMultipleSelected] = useState<string[]>([])

  const handleSelectClick = (v: string) => {
    if (multiple) {
      if (multipleSelected.includes(v)) {
        removeMultipleSelected(v)
      } else {
        setMultipleSelected([...multipleSelected, v])
      }
    } else {
      setSelected((pre) => {
        return pre === v ? '' : v
      })
      setActive(false)
    }
  }

  const removeMultipleSelected = (v: string) => {
    if (multipleSelected.length === 1) setActive(false)
    setMultipleSelected(multipleSelected.filter((s) => s !== v))
  }

  const renderSelectItem = () => {
    return multiple
      ? multipleSelected.map((v) => {
          return (
            <span
              className="filter-multipleItem"
              key={v}
              onClick={(e) => {
                e.stopPropagation()
                removeMultipleSelected(v)
              }}
            >
              {v}
              <CloseOutlined className="filter-close" />
            </span>
          )
        })
      : selected
  }

  useEffect(() => {
    const closeOption = () => {
      setActive(false)
    }
    apisRef.current.push(setActive)

    document.addEventListener('click', closeOption)

    return () => {
      document.removeEventListener('click', closeOption)
      apisRef.current = apisRef.current.filter((v) => v !== setActive)
    }
  }, [])

  return (
    <div
      className={style['baseFilter-container']}
      onClick={(e) => {
        // 阻止后序原生事件执行，防止点击容器时也关闭下拉区域
        e.nativeEvent.stopPropagation()
        apisRef.current.forEach((f) => {
          if (f !== setActive) f(false)
        })
      }}
    >
      <div
        className="filter-select"
        onClick={() => {
          setActive(!active)
        }}
      >
        {selected || multipleSelected.length !== 0 ? (
          renderSelectItem()
        ) : (
          <span className="filter-placeHolder">{placeHolder}</span>
        )}
      </div>
      <ul className="filter-options">
        {data.map((v) => {
          return (
            <li
              className={classNames({
                selected: multiple
                  ? multipleSelected.includes(v)
                  : selected === v,
                showFilterOption: active,
              })}
              key={v}
              onClick={() => {
                handleSelectClick(v)
              }}
            >
              <span
                className={classNames({
                  'filter-selectText':
                    v === selected || multipleSelected.includes(v),
                })}
              >
                {v}
              </span>
              {multiple && multipleSelected.includes(v) && (
                <CheckOutlined className="filter-checkIcon" />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BaseFilter
