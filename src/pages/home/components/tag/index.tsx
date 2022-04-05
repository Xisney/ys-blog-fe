import { FC } from 'react'
import style from './style.module.less'

interface TagProps {
  content?: string
  children?: string
  onClick?: () => void
}

const Tag: FC<TagProps> = ({ content, children, onClick }) => {
  return (
    <span className={style['tag-container']} onClick={onClick}>
      {content ?? children}
    </span>
  )
}

export default Tag
