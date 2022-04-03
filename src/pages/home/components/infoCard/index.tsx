import { FC } from 'react'
import { FileTextOutlined, CalendarOutlined } from '@ant-design/icons'
import CommomCard from '../commomCard'

import style from './style.module.less'

interface InfoCardProps {
  totalViewCount: number
  runTime: string
}

const InfoCard: FC<InfoCardProps> = ({ totalViewCount, runTime }) => {
  return (
    <CommomCard cardTitle="博客信息" className={style['blogInfo-card']}>
      <div className="info-item">
        <span>
          <FileTextOutlined /> 总浏览量
        </span>
        <span>{`${totalViewCount} 次`}</span>
      </div>
      <div className="info-item">
        <span>
          <CalendarOutlined /> 运行时间
        </span>
        <span>{runTime}</span>
      </div>
    </CommomCard>
  )
}

export default InfoCard
