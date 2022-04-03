import { FC } from 'react'
import style from './style.module.less'
import { NavCardItemProps } from '../navCardItem'
import NavCardItem from '../navCardItem'

export interface NavCardProps {
  id: number
  label: string
  navItems: NavCardItemProps[]
}

const NavCard: FC<NavCardProps> = ({ label, navItems }) => {
  return (
    <div className={style['navCard-container']}>
      <div className="navCard-anchor" id={label}></div>
      <h3 className="navCard-title">{label}</h3>
      <div className="navCards-wrapper">
        {navItems.map((v, i) => (
          <NavCardItem key={i} {...v} />
        ))}
      </div>
    </div>
  )
}

export default NavCard
