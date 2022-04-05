import { FC, ReactNode } from 'react'
import style from './style.module.less'

const NoData: FC = ({ children }) => {
  return <h3 className={style['noData-wrapper']}>{children ?? '暂无数据'}</h3>
}

export default NoData
