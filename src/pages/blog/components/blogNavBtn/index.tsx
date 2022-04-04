import { FC } from 'react'
import { BarsOutlined } from '@ant-design/icons'
import style from './style.module.less'

interface BlogNavBtnProps {
  onClick?: () => void
}

const BlogNavBtn: FC<BlogNavBtnProps> = ({ onClick }) => {
  return (
    <div className={style['blog-navBtn']} onClick={onClick}>
      <BarsOutlined />
    </div>
  )
}

export default BlogNavBtn
