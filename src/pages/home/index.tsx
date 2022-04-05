import InfoCard from './components/infoCard'
import CommomCard from './components/commomCard'
import Tag from './components/tag'
import Clock from './components/clock'
import PageTitle from '@src/components/pageTitle'
import BaseContainer from '../components/baseContainer'
import { getHomeBaseData, HomeBaseData, getHomePoemData } from '@src/api/home'
import { groupsAndTagsAtom } from '@src/atom'
import { useRecoilValue } from 'recoil'
import { ArticleList, getArticleList } from '@src/api/common'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import BlogList from './components/blogList'
import style from './style.module.less'
import { useNavigate } from 'react-router-dom'

dayjs.extend(relativeTime)

const Home = () => {
  const groupsAndTags = useRecoilValue(groupsAndTagsAtom)
  const navigate = useNavigate()

  return (
    <BaseContainer
      className={style['home-container']}
      getData={[getHomeBaseData, getHomePoemData, getArticleList]}
    >
      {([baseData, poemData, articleList]: [
        HomeBaseData,
        string,
        ArticleList
      ]) => {
        return (
          <>
            <main className="home-main">
              <PageTitle title="沉梦昂志" subTitle={poemData} />
              <BlogList data={articleList.data} />
            </main>
            <aside className="home-aside">
              <InfoCard
                totalViewCount={baseData.data.viewCount}
                runTime={dayjs(baseData.data.startTime).fromNow(true)}
              />
              <CommomCard cardTitle="公告">{baseData.data.notice}</CommomCard>
              <CommomCard cardTitle="标签云">
                {groupsAndTags?.data.groups.map(({ label, id }) => {
                  return (
                    <Tag
                      key={id}
                      onClick={() => {
                        navigate('archive', { state: label })
                      }}
                    >
                      {label}
                    </Tag>
                  )
                })}
              </CommomCard>
              <Clock />
            </aside>
          </>
        )
      }}
    </BaseContainer>
  )
}

export default Home
