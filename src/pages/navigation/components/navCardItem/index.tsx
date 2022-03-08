import { FC } from 'react'

export interface NavCardItemProps {
  iconSrc: string
  itemTitle: string
  itemDes: string
  itemLink: string
}

const NavCardItem: FC<NavCardItemProps> = () => {
  return <div className='navCardItem-container'>
    </div>
}

export default NavCardItem
