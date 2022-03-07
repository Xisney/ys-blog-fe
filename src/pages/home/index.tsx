import { useState } from 'react'
import style from './style.module.less'
import ListCard from './components/listCard'
import Pagination from './components/pagination'
import InfoCard from './components/infoCard'
import CommomCard from './components/commomCard'
import Tag from './components/tag'
import Clock from './components/clock'

const Home = () => {
  const [data, setData] = useState(
    Array(10)
      .fill(0)
      .map((_, i) => i + 1)
  )

  return (
    <div className={style['home-container']}>
      <main className="home-main">
        <header className="home-title">
          <h2>沉梦昂志</h2>
          <p>迄今所有人生都大写着失败，但并不妨碍我继续向前。 </p>
        </header>
        <div className="home-card-list">
          {data.map(v => {
            return (
              <ListCard
                title="HS8145C5光猫桥接与路由器拨号"
                des="HS8145C5光猫桥接与路由器拨号HS8145C5光猫桥接与路由器拨号HS8145C5光猫桥接与路由器拨号HS8145C5光猫桥接与路由器拨号HS8145C5光猫桥接与路由器拨号"
                viewCount={100}
                timeString="2022年3月5日"
                commentCount={10}
                key={v}
              />
            )
          })}
        </div>
        <Pagination
          onChange={page => {
            console.log(page)
          }}
          total={100}
        />
      </main>
      <aside className="home-aside">
        <InfoCard totalViewCount={5000} runTimes={400} />
        <CommomCard cardTitle="公告">准备动手，今晚行动！</CommomCard>
        <CommomCard cardTitle="标签云">
          {[
            'React',
            'Vue',
            'Javascript',
            '图像',
            '云计算',
            'CSS',
            'Typescript',
            'vite',
            'webpack',
          ].map(v => (
            <Tag key={v}>{v}</Tag>
          ))}
        </CommomCard>
        <Clock />
      </aside>
    </div>
  )
}

export default Home
