import { FC } from 'react'
import style from './style.module.less'

interface TagProps {
  content?: string
  children?: string
}

const Tag: FC<TagProps> = ({ content, children }) => {
  return <span className={style['tag-container']}>{content ?? children}</span>
}

export default Tag
