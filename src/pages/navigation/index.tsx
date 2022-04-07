import BaseContainer from '../components/baseContainer'
import NavCard, { NavCardProps } from './components/navCard'
import { getNavigationItems, NavigationData } from '@src/api/navigation'
import NavAnchor from './components/navAnchor'
import PageTitle from '@src/components/pageTitle'
import style from './style.module.less'
import BlogNavBtn from '../blog/components/blogNavBtn'
import Drawer from '@src/components/drawer'
import { useState } from 'react'

const Navigation = () => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  return (
    <BaseContainer
      className={style['navigation-container']}
      getData={getNavigationItems}
    >
      {(data: NavigationData) => {
        return (
          <>
            <PageTitle title="导航" />
            <div className="navigation-mainArea">
              {data?.data.map((v, i) => (
                <NavCard {...v} key={i} />
              ))}
            </div>
            <BlogNavBtn
              onClick={() => {
                setDrawerVisible(true)
              }}
            />
            <Drawer
              visible={drawerVisible}
              onClose={() => {
                setDrawerVisible(false)
              }}
              className="nav-anchor"
            >
              <NavAnchor anchorList={data?.data.map(v => v.label)} />
            </Drawer>
          </>
        )
      }}
    </BaseContainer>
  )
}

export default Navigation
