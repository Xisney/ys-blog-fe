import { FC } from 'react'
import {
  FileTextOutlined,
  MailOutlined,
  CalendarOutlined,
  BulbOutlined,
} from '@ant-design/icons'

import style from './style.module.less'

interface InfoCardProps {
  articleNum: number
  commentNum: number
  runDays: string
  lastModify: string
}

const InfoCard: FC<InfoCardProps> = () => {
  return (
    <div className={style['infoCard-container']}>
      <div className="info-item">
        <FileTextOutlined /> 文章数目
      </div>
      <div>
        <MailOutlined /> 留言数目
      </div>
      <div>
        <CalendarOutlined /> 运行天数
      </div>
      <div>
        <BulbOutlined />
        上次活动
      </div>
    </div>
  )
}

export default InfoCard
