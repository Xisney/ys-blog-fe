import { ArchiveData, getArchiveData } from '@src/api/archive'
import PageTitle from '@src/components/pageTitle'
import BaseContainer from '../components/baseContainer'
import ArchiveFilter from './components/archiveFilter'
import TimeLine from './components/timeLine'
import style from './style.module.less'

const Archive = () => {
  return (
    <BaseContainer
      getData={getArchiveData}
      className={style['archive-container']}
    >
      {(data: ArchiveData[]) => {
        const articelNum = data.reduce((pre, v) => {
          return pre + v.articles.length
        }, 0)
        return (
          <>
            <PageTitle
              title="归档"
              subTitle={`共计${articelNum}篇文章,继续加油哦`}
            />
            <ArchiveFilter
              groups={['前端技术实践', '网络应用']}
              tags={['React', 'Vue']}
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
