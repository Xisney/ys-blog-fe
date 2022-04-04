import { FC, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import cx from 'classnames'
import './index.less'

const Drawer: FC<DrawerProps> = props => {
  const domRef = useRef<HTMLDivElement>()

  useEffect(() => {
    return () => {
      document.body.removeChild(domRef.current!)
    }
  }, [])

  return createPortal(
    <DrawerInner {...props} />,
    domRef.current ||
      (domRef.current = document.body.appendChild(
        document.createElement('div')
      ))
  )
}

interface DrawerProps {
  visible: boolean
  onClose: () => void
  position?: 'left' | 'right'
  className?: string
}

const DrawerInner: FC<DrawerProps> = ({
  children,
  onClose,
  visible,
  position = 'right',
  className,
}) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [visible])

  return (
    <>
      <div
        className={cx('drawer-mask', { 'drawer-mask-active': visible })}
        onClick={onClose}
      />
      <div
        className={cx(
          `drawer-wrapper`,
          {
            [`drawer-wrapper-active`]: visible,
          },
          `drawer-${position}`,
          className
        )}
      >
        {children}
      </div>
    </>
  )
}

export default Drawer
