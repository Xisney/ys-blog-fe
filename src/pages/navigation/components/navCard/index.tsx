import { FC } from 'react'
import style from './style.module.less'
import { NavCardItemProps } from '../navCardItem'
import NavCardItem from '../navCardItem'

export interface NavCardProps {
  cardTitle: string
  navCardItems: NavCardItemProps[]
}

const NavCard: FC<NavCardProps> = ({ cardTitle, navCardItems }) => {
  return (
    <div className={style['navCard-container']}>
      <h3 className="navCard-title">{cardTitle}</h3>
      <div className="navCards-wrapper">
        {navCardItems.map((v, i) => (
          <NavCardItem key={i} {...v} />
        ))}
      </div>
    </div>
  )
}

export default NavCard
