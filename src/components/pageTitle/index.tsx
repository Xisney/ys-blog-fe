import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import style from './style.module.less'

interface PageTitleProps {
  title: ReactNode
  subTitle?: ReactNode
}

const PageTitle: FC<PageTitleProps> = ({ title, subTitle }) => {
  return (
    <header
      className={classNames(style['page-title'], {
        [style['morePadding']]: subTitle,
      })}
    >
      <div className="title-header">{title}</div>
      {subTitle && <div className="subTitle-wrapper">{subTitle}</div>}
    </header>
  )
}

export default PageTitle
