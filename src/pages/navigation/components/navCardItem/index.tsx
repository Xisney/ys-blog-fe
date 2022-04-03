import { FC } from 'react'
import style from './style.module.less'

export interface NavCardItemProps {
  id: number
  iconUrl: string
  title: string
  description: string
  url: string
}

const NavCardItem: FC<NavCardItemProps> = ({
  iconUrl,
  title,
  description,
  url,
}) => {
  return (
    <a className={style['navCardItem-container']} href={url} target="_blank">
      <div className="navCardItem-top">
        <img src={iconUrl} alt="icon" />
        <h4>{title}</h4>
      </div>
      <p className="navCardItem-des">{description}</p>
    </a>
  )
}

export default NavCardItem
