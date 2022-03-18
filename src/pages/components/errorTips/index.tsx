import { FC } from 'react'
import style from './style.module.less'
import { ReactComponent as ErrorIcon } from './static/error.svg'
import cx from 'classnames'

interface ErrorTipsProps {
  message?: string
  className?: string
}

const ErrorTips: FC<ErrorTipsProps> = ({ message, className }) => {
  return (
    <div className={cx(style['errorTips-container'], className)}>
      <ErrorIcon className="errorTips-icon" />
      <div className="errorTips-text">
        <h3>发生错误，请联系管理员</h3>
        {message && <p>{message}</p>}
      </div>
    </div>
  )
}

export default ErrorTips
