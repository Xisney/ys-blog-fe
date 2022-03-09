import { useEffect, useState } from 'react'
import NavCard, { NavCardProps } from './components/navCard'
import { getNavigationItems } from '@src/api/navigation'
import Loading from '@src/components/loading'

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
    <div className="navigation-container">
      {loading && <Loading />}
      {navItems?.map((v, i) => (
        <NavCard {...v} key={i} />
      ))}
    </div>
  )
}

export default Navigation
