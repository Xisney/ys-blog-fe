import { useState } from 'react'
import style from './style.module.less'
import ListCard from './components/listCard'
import Pagination from './components/pagination'
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

const Home = () => {
  const [data, setData] = useState(
    Array(10)
      .fill(0)
      .map((_, i) => i + 1)
  )

  const groupsAndTags = useRecoilValue(groupsAndTagsAtom)

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
              <div className="home-card-list">
                {articleList.dataList.map((v) => {
                  return (
                    <ListCard
                      title={v.title}
                      des={v.description}
                      viewCount={100}
                      timeString={dayjs(v.publishTime).format(
                        'YYYY[年]M[月]D[日]'
                      )}
                      tags={v.tags.map((v) => v.label)}
                      key={v.id}
                    />
                  )
                })}
                <Pagination
                  onChange={(page) => {
                    console.log(page)
                  }}
                  total={100}
                />
              </div>
            </main>
            <aside className="home-aside">
              <InfoCard
                totalViewCount={baseData.blogInfo.viewCount}
                runTimes={baseData.blogInfo.runTime}
              />
              <CommomCard cardTitle="公告">{baseData.notice}</CommomCard>
              <CommomCard cardTitle="标签云">
                {groupsAndTags?.groups.map(({ label, id }) => {
                  return <Tag key={id}>{label}</Tag>
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
