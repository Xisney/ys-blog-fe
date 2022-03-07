import { FC } from 'react'
import classNames from 'classnames'

import style from './style.module.less'

interface InfoCardProps {
  cardTitle: string
  className?: string
}

const CommomCard: FC<InfoCardProps> = ({ cardTitle, children, className }) => {
  return (
    <div className={classNames(style['infoCard-container'], className)}>
      <p className="infoCard-title">{cardTitle}</p>
      <div className="infoItem-wrapper">{children}</div>
    </div>
  )
}

export default CommomCard
