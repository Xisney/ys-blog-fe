import { FC } from 'react'
import style from './style.module.less'

interface NavAnchorProps {
  anchorList: string[] | undefined
}

const NavAnchor: FC<NavAnchorProps> = ({ anchorList }) => {
  return (
    <ul className={style['navAnchor-container']}>
      {anchorList?.map((v, i) => {
        return (
          <li key={i} className="title-anchor">
            <a href={`#${v}`}>{v}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavAnchor
