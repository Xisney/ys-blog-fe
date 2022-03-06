import { useState } from 'react'
import style from './style.module.less'
import Card from './components/card'
import Pagination from './components/pagination'

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
              <Card
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
      </aside>
    </div>
  )
}

export default Home
