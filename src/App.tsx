import { lazy, Suspense } from 'react'
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
dayjs.locale('zh-cn')

const App = () => {
  return (
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
              <Suspense
                fallback={
                  <div>
                    <Loading.RouteLoading />
                  </div>
                }
              >
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
