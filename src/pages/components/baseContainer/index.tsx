import { FC, ReactElement } from 'react'
import classNames from 'classnames'
import { useGetData } from '@src/pages/hooks'
import { AxiosPromise } from 'axios'
import Loading from '@src/components/loading'
import ErrorTips from '../errorTips'

interface BaseContainerProps {
  className?: string
  getData: () => AxiosPromise
  children: (data: any) => ReactElement
}

const BaseContainer: FC<BaseContainerProps> = ({
  className,
  getData,
  children,
}) => {
  const [data, loading, error] = useGetData(getData)

  const renderChildren = () => {
    return loading ? <Loading /> : children(data)
  }

  return (
    <div className={classNames(className)}>
      {error ? <ErrorTips message={error.message} /> : renderChildren()}
    </div>
  )
}

export default BaseContainer
