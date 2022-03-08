import { FC } from 'react'
import style from './style.module.less'
import { EyeOutlined, ClockCircleOutlined } from '@ant-design/icons'

interface CardProps {
  title: string
  des: string
  viewCount: number
  timeString: string
  tags: string[]
  imgSrc?: string
}

const ListCard: FC<CardProps> = ({
  title,
  des,
  viewCount,
  timeString,
  tags,
  imgSrc,
}) => {
  return (
    <div className={style['card-container']}>
      {imgSrc && <img src={imgSrc} />}
      <h3 className="card-title">{title}</h3>
      <p className="card-des">{des}</p>
      <ul className="card-info-area">
        <li>
          <span className="bottom-item">
            <EyeOutlined /> {viewCount} 次浏览
          </span>
          <span className="bottom-item">
            <ClockCircleOutlined /> {timeString}
          </span>
        </li>
        <li>
          {tags.map(v => {
            return (
              <span className="bottom-tag" key={v}>
                {v}
              </span>
            )
          })}
        </li>
      </ul>
    </div>
  )
}

export default ListCard
