import { FC } from 'react'
import style from './style.module.less'
import dayjs from 'dayjs'

import {
  ClockCircleOutlined,
  EyeOutlined,
  NumberOutlined,
} from '@ant-design/icons'

interface BlogSubTitleProps {
  group?: string
  publishTime?: string
  viewCount?: number
}

const BlogSubTitle: FC<BlogSubTitleProps> = ({
  group,
  publishTime,
  viewCount,
}) => {
  return (
    <p className={style['blogSubTitle-wrapper']}>
      <span>
        <ClockCircleOutlined />
        {dayjs(publishTime).format('YYYY[年]M[月]D[日]')}
      </span>
      <span>
        <EyeOutlined />
        {`${viewCount} 次浏览`}
      </span>
      <span>
        <NumberOutlined />
        {group}
      </span>
    </p>
  )
}

export default BlogSubTitle
