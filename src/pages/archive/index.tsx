import { ArchiveData, getArchiveData } from '@src/api/archive'
import { groupsAndTagsAtom } from '@src/atom'
import PageTitle from '@src/components/pageTitle'
import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import BaseContainer from '../components/baseContainer'
import ArchiveFilter from './components/archiveFilter'
import TimeLine from './components/timeLine'
import style from './style.module.less'

const Archive = () => {
  const groupsAndTags = useRecoilValue(groupsAndTagsAtom)

  const { groups, tags } = useMemo(() => {
    if (!groupsAndTags) {
      return {
        groups: [],
        tags: [],
      }
    }

    const { data } = groupsAndTags
    return {
      groups: data.groups.map(({ label, blogNum }) => ({ label, blogNum })),
      tags: data.tags.map(({ label }) => ({ label })),
    }
  }, [groupsAndTags])

  return (
    <BaseContainer
      getData={getArchiveData}
      className={style['archive-container']}
    >
      {({ data }: ArchiveData, setData) => {
        data.sort((a, b) => {
          if (a.archiveTime > b.archiveTime) return -1

          return 0
        })

        const articelNum = data.reduce((pre, v) => {
          return pre + v.blogs.length
        }, 0)
        return (
          <>
            <PageTitle
              title="归档"
              subTitle={`共计${articelNum}篇文章,继续加油哦`}
            />
            <ArchiveFilter
              groups={groups}
              tags={tags}
              setData={setData}
              data={data}
            />
            <div className="archive-mainArea">
              <TimeLine data={data} />
            </div>
          </>
        )
      }}
    </BaseContainer>
  )
}

export default Archive
