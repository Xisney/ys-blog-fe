import { FC } from 'react'
import style from './style.module.less'
import { ReactComponent as ErrorIcon } from './static/error.svg'

interface ErrorTipsProps {
  message?: string
}

const ErrorTips: FC<ErrorTipsProps> = ({ message }) => {
  return (
    <div className={style['errorTips-container']}>
      <ErrorIcon className="errorTips-icon" />
      <div className="errorTips-text">
        <h3>发生错误，请联系管理员</h3>
        {message && <p>{message}</p>}
      </div>
    </div>
  )
}

export default ErrorTips
