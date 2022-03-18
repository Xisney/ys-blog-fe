import { useState } from 'react'
import { HomeFilled } from '@ant-design/icons'
import style from './style.module.less'
import Search from './components/search'
import { Theme } from './consts'
import { ReactComponent as Sun } from './static/sun.svg'
import { ReactComponent as Moon } from './static/moon.svg'

const Header = () => {
  const [theme, setTheme] = useState<Theme>(Theme.light)

  return (
    <div className={style.header}>
      <div className="header-logo">
        <HomeFilled />
        <span className="logo-text">YS</span>
      </div>
      <Search className="header-search" />
      <div
        className="switch-theme"
        onClick={() => {
          setTheme(theme ^ 1)
        }}
      >
        {theme === Theme.light ? <Sun /> : <Moon />}
      </div>
    </div>
  )
}

export default Header
