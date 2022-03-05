import { FC } from 'react'
import style from './style.module.less'
import {
  EyeOutlined,
  ClockCircleOutlined,
  CommentOutlined,
} from '@ant-design/icons'

interface CardProps {
  title: string
  des: string
  viewCount: number
  timeString: string
  commentCount: number
  imgSrc?: string
}

const Card: FC<CardProps> = ({
  title,
  des,
  viewCount,
  timeString,
  commentCount,
  imgSrc,
}) => {
  return (
    <div className={style['card-container']}>
      {imgSrc && <img src={imgSrc} />}
      <h3 className="card-title">{title}</h3>
      <p className="card-des">{des}</p>
      <ul className="card-info-area">
        <li>
          <EyeOutlined /> {viewCount} 次浏览
        </li>
        <li>
          <ClockCircleOutlined /> {timeString}
        </li>
        <li>
          <CommentOutlined />{' '}
          {commentCount ? `${commentCount} 条评论` : '暂无评论'}
        </li>
      </ul>
    </div>
  )
}

export default Card
