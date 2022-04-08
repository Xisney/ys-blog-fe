import { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Aside from './components/aside'
import Footer from './components/footer'
import ToTopFixedBtn from './components/toTopFixedBtn'

import './theme/base.less'
import style from './app.module.less'

import Home from './pages/home'
import NotFound from './pages/404'
import Blog from './pages/blog'
const Navigation = lazy(() => import('./pages/navigation'))
const About = lazy(() => import('./pages/about'))
const Archive = lazy(() => import('./pages/archive'))
const Comment = lazy(() => import('./pages/comment'))

// dayjs 全局中文
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Loading from './components/loading'
import { getArticleList } from './api/common'
import { useSetRecoilState } from 'recoil'
import { ArticleListAtom } from './atom'
dayjs.locale('zh-cn')

const App = () => {
  const [loading, setLoading] = useState(true)
  const setArticleList = useSetRecoilState(ArticleListAtom)

  useEffect(() => {
    getArticleList()
      .then(({ data: { data, code } }) => {
        if (code === -1) throw '服务异常'

        setArticleList(data)
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <div className={style['app-container']}>
      <Header />
      <div className="body">
        <Aside />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route
            path="/navigation"
            element={
              <Suspense fallback={<Loading.RouteLoading />}>
                <Navigation />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading.RouteLoading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/archive"
            element={
              <Suspense fallback={<Loading.RouteLoading />}>
                <Archive />
              </Suspense>
            }
          />
          <Route
            path="/comment"
            element={
              <Suspense fallback={<Loading.RouteLoading />}>
                <Comment />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
      <ToTopFixedBtn />
    </div>
  )
}

export default App
