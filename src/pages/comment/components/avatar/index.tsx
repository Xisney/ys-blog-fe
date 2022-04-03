import { FC } from 'react'
import style from './style.module.less'
import cx from 'classnames'
import failback from './static/user.svg'

interface AvatarProps {
  src: string
  className?: string
}

const Avatar: FC<AvatarProps> = ({ src, className }) => {
  return (
    <img
      src={src || failback}
      alt="avatar"
      className={cx(style['avatar-wrapper'], className)}
    />
  )
}

export default Avatar
