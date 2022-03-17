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
import { getHomeData } from '@src/api/home'
import { groupsAndTagsAtom } from '@src/atom'
import { useRecoilValue } from 'recoil'

const Home = () => {
  const [data, setData] = useState(
    Array(10)
      .fill(0)
      .map((_, i) => i + 1)
  )

  const groupsAndTags = useRecoilValue(groupsAndTagsAtom)

  return (
    <BaseContainer className={style['home-container']} getData={getHomeData}>
      {() => {
        return (
          <>
            <main className="home-main">
              <PageTitle
                title="沉梦昂志"
                subTitle="如沐春风如沐春风如沐春风如沐春风如沐春风如沐春风 "
              />
              <div className="home-card-list">
                {data.map((v) => {
                  return (
                    <ListCard
                      title="HS8145C5光猫桥接与路由器拨号"
                      des="HS8145C5光猫桥接与路由器拨号HS8145C5光猫桥接与路由器拨号HS8145C5光猫桥接与路由器拨号HS8145C5光猫桥接与路由器拨号HS8145C5光猫桥接与路由器拨号"
                      viewCount={100}
                      timeString="2022年3月5日"
                      tags={['React', 'Fetch', 'Net']}
                      key={v}
                    />
                  )
                })}
              </div>
              <Pagination
                onChange={(page) => {
                  console.log(page)
                }}
                total={100}
              />
            </main>
            <aside className="home-aside">
              <InfoCard totalViewCount={5000} runTimes={400} />
              <CommomCard cardTitle="公告">准备动手，今晚行动！</CommomCard>
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
