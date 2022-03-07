import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import style from './app.module.less'
import Header from './components/header'
import Aside from './components/aside'
import Footer from './components/footer'
import ToTopFixedBtn from './components/toTopFixedBtn'

import Home from './pages/home'
const Navigation = lazy(() => import('./pages/navigation'))
const About = lazy(() => import('./pages/about'))
const Archive = lazy(() => import('./pages/archive'))
const Comment = lazy(() => import('./pages/comment'))

const App = () => {
  return (
    <div className={style['app-container']}>
      <Header />
      <div className="body">
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/navigation"
            element={
              <Suspense fallback={<h2>pending...</h2>}>
                <Navigation />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<h2>pending...</h2>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/archive"
            element={
              <Suspense fallback={<h2>pending...</h2>}>
                <Archive />
              </Suspense>
            }
          />
          <Route
            path="/comment"
            element={
              <Suspense fallback={<h2>pending...</h2>}>
                <Comment />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
      <ToTopFixedBtn />
    </div>
  )
}

export default App
