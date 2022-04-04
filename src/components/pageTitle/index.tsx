import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import style from './style.module.less'

interface PageTitleProps {
  title: string
  subTitle?: ReactNode
}

const PageTitle: FC<PageTitleProps> = ({ title, subTitle }) => {
  return (
    <header
      className={classNames(style['page-title'], {
        [style['morePadding']]: subTitle,
      })}
    >
      <h2>{title}</h2>
      {subTitle && <div className="subTitle-wrapper">{subTitle}</div>}
    </header>
  )
}

export default PageTitle
