import { FC } from 'react'
import style from './style.module.less'

export interface NavCardItemProps {
  iconSrc: string
  itemTitle: string
  itemDes: string
  itemLink: string
}

const NavCardItem: FC<NavCardItemProps> = ({
  iconSrc,
  itemTitle,
  itemDes,
  itemLink,
}) => {
  return (
    <a className={style['navCardItem-container']} href={itemLink}>
      <div className='navCardItem-top'>
        <img src={iconSrc} alt="icon" />
        <h4>{itemTitle}</h4>
      </div>
      <p className='navCardItem-des'>{itemDes}</p>
    </a>
  )
}

export default NavCardItem
