import { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.less'

interface PageTitleProps {
  title: string
  subTitle?: string
}

const PageTitle: FC<PageTitleProps> = ({ title, subTitle }) => {
  return (
    <header
      className={classNames(style['page-title'], {
        [style['morePadding']]: subTitle,
      })}
    >
      <h2>{title}</h2>
      {subTitle && <p>{subTitle}</p>}
    </header>
  )
}

export default PageTitle
