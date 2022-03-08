import { useEffect, useState } from 'react'
import style from './style.module.less'
import { throttle } from '@src/utils'
import { ReactComponent as Arrow } from './static/arrow.svg'
import classNames from 'classnames'

const ToTopFixedBtn = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    const fn = throttle(() => {
      const top = document.documentElement.scrollTop
      if (top > 500) setShowBtn(true)
      else {
        setShowBtn(false)
      }
    }, 300)
    window.addEventListener('scroll', fn)
    return () => {
      window.removeEventListener('scroll', fn)
    }
  }, [])

  const handleTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={classNames(style['toTopBtn-container'], {
        [style['toTopBtn-active']]: showBtn,
      })}
      onClick={handleTopClick}
    >
      <Arrow />
    </div>
  )
}

export default ToTopFixedBtn
