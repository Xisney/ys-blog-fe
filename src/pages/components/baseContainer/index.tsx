import { FC, ReactElement } from 'react'
import classNames from 'classnames'
import { useGetData } from '@src/pages/hooks'
import { AxiosPromise } from 'axios'
import Loading from '@src/components/loading'

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
  const [data, loading] = useGetData(getData)

  return (
    <div className={classNames(className)}>
      {loading ? <Loading /> : children(data)}
    </div>
  )
}

export default BaseContainer
