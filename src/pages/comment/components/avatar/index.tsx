import { FC } from 'react'
import style from './style.module.less'
import cx from 'classnames'

interface AvatarProps {
  src: string
  className?: string
}

const Avatar: FC<AvatarProps> = ({ src, className }) => {
  return (
    <img
      src={
        src ||
        'https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210807103114.png'
      }
      alt="avatar"
      className={cx(style['avatar-wrapper'], className)}
    />
  )
}

export default Avatar
