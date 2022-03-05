import { FC } from 'react'
import style from './style.module.less'
import { SearchOutlined } from '@ant-design/icons'

export interface SearchProps {
  onEnter?: () => any
  placeHolder?: string
  className?:string
}

const Search: FC<SearchProps> = ({
  onEnter,
  placeHolder = '请输入内容...',
  className
}) => {
  
  return (
    <div className={`${style['search-input']} ${className}`}>
      <input type="text" id="text-input" placeholder={placeHolder} />
      <div className="icon-area">
        <SearchOutlined className="search-icon" onClick={onEnter}/>
      </div>
    </div>
  )
}

export default Search
