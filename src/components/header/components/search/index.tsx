import { FC, useCallback, useEffect, useState } from 'react'
import style from './style.module.less'
import { SearchOutlined } from '@ant-design/icons'
import { useRecoilValue } from 'recoil'
import { ArticleListAtom } from '@src/atom'
import { Article } from '@src/api/common'
import { debounce } from '@src/utils'
import { useNavigate } from 'react-router-dom'

export interface SearchProps {
  onEnter?: () => any
  placeHolder?: string
  className?: string
}

const Search: FC<SearchProps> = ({
  onEnter,
  placeHolder = '请输入文章标题...',
  className,
}) => {
  const [title, setTitle] = useState('')
  const data = useRecoilValue(ArticleListAtom)

  const navigate = useNavigate()

  const [showRes, setShowRes] = useState(false)
  const [showData, setShowData] = useState<Article[]>([])

  const updateFn = useCallback<(s: string) => void>(
    debounce((title: string) => {
      if (data) {
        setShowData(data.filter(v => v.title.includes(title)).slice(0, 10))
      }
    }, 300),
    [data]
  )

  useEffect(() => {
    updateFn(title)
  }, [title])

  return (
    <div
      className={`${style['search-input']} ${className}`}
      onClick={e => {
        e.nativeEvent.stopPropagation()
      }}
    >
      <input
        type="text"
        id="text-input"
        placeholder={placeHolder}
        value={title}
        onChange={e => {
          setTitle(e.target.value.trim())
          setShowRes(true)
        }}
        onBlur={() => {
          setTimeout(() => {
            setShowRes(false)
          }, 200)
        }}
      />
      <div className="icon-area">
        <SearchOutlined className="search-icon" onClick={onEnter} />
      </div>

      {showRes && (
        <ul className="search-resList">
          {showData.length !== 0 ? (
            showData.map(v => {
              return (
                <li
                  key={v.id}
                  onClick={() => {
                    navigate(`/blog/${v.id}`)
                  }}
                >
                  {v.title}
                </li>
              )
            })
          ) : (
            <li className="search-nodata">暂无数据</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default Search
