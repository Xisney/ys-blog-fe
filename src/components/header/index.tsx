import { useLayoutEffect, useState } from 'react'
import { HomeFilled, MenuOutlined } from '@ant-design/icons'
import style from './style.module.less'
import Search from './components/search'
import { ReactComponent as Sun } from './static/sun.svg'
import { ReactComponent as Moon } from './static/moon.svg'
import { debounce } from '@src/utils'
import Drawer from '../drawer'
import Aside from '../aside'

enum Theme {
  light = 'light',
  dark = 'dark',
}

const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || Theme.light
  })

  const [show, setShow] = useState(false)

  const handleChangeTheme = debounce(() => {
    const nextTheme = theme === Theme.dark ? Theme.light : Theme.dark
    if (nextTheme === Theme.dark) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light')
    }
    setTheme(nextTheme)
  }, 300)

  useLayoutEffect(() => {
    if (theme === Theme.dark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className={style.header}>
      <div className="header-logo">
        <HomeFilled />
        <span className="logo-text">Yusheng</span>
      </div>
      <div
        className="header-menu"
        onClick={() => {
          setShow(true)
        }}
      >
        <MenuOutlined />
      </div>
      <Search className="header-search" />
      <div className="switch-theme" onClick={handleChangeTheme}>
        {theme === Theme.light ? <Sun /> : <Moon />}
      </div>
      <Drawer
        visible={show}
        onClose={() => {
          setShow(false)
        }}
        className="header-menu-drawer"
        position="left"
      >
        <Aside className="aside-Indrawer" />
      </Drawer>
    </div>
  )
}

export default Header
