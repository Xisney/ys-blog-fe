import { FC, useRef } from 'react'
import BaseFilter from '../baseFilter'
import style from './style.module.less'

interface ArchiveFilterProps {
  groups: string[]
  tags: string[]
}

const ArchiveFilter: FC<ArchiveFilterProps> = ({ groups, tags }) => {
  const stateRef = useRef([])

  return (
    <div className={style['archiveFilter-container']}>
      <div className="archiveFilter-item">
        分组筛选：
        <BaseFilter
          data={groups}
          placeHolder="请选择文章分组"
          apisRef={stateRef}
        />
      </div>
      <div className="archiveFilter-item">
        标签筛选：
        <BaseFilter
          data={tags}
          multiple
          placeHolder="请选择文章标签"
          apisRef={stateRef}
        />
      </div>
    </div>
  )
}

export default ArchiveFilter
