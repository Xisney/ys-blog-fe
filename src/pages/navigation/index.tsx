import { useEffect, useState } from 'react'
import NavCard, { NavCardProps } from './components/navCard'
import { getNavigationItems } from '@src/api/navigation'
import Loading from '@src/components/loading'
import NavAnchor from './components/navAnchor'
import PageTitle from '@src/components/pageTitle'
import style from './style.module.less'

const Navigation = () => {
  const [navItems, setNavItems] = useState<NavCardProps[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getNavigationItems().then(res => {
      setNavItems(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <div className={style['navigation-container']}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title="导航" />
          {navItems?.map((v, i) => (
            <NavCard {...v} key={i} />
          ))}
          <NavAnchor anchorList={navItems?.map(v => v.cardTitle)} />
        </>
      )}
    </div>
  )
}

export default Navigation
