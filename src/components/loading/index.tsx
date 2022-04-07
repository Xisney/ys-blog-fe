import { ReactComponent as LoadingIcon } from './static/loading.svg'
import cx from 'classnames'
import style from './style.module.less'

interface LoadingProps {
  className?: string
}

const Loading = ({ className }: LoadingProps) => {
  return (
    <div className={cx(style['loading-container'], className)}>
      <LoadingIcon className="loading-icon" />
    </div>
  )
}

Loading.RouteLoading = () => {
  return (
    <div>
      <Loading />
    </div>
  )
}

export default Loading
