import { getBlogContent } from '@src/api/blog'
import CommonReader from '@src/components/commonReader'
import Loading from '@src/components/loading'
import PageTitle from '@src/components/pageTitle'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ErrorTips from '../components/errorTips'
import BlogSubTitle from './components/blogSubTitle'
import MarkdownNavbar from 'markdown-navbar'

import style from './style.module.less'
import BlogNavBtn from './components/blogNavBtn'
import Drawer from '@src/components/drawer'

interface BlogState {
  content: string
  title: string
  group: { id: number; label: string }
  publishTime: string
  viewCount: number
}

const Blog = () => {
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  const [blog, setBlog] = useState<BlogState>()

  const { id = '' } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [drawerVisible, setDrawerVisible] = useState(false)

  useEffect(() => {
    const blogId = parseInt(id)
    if (Object.is(blogId, NaN)) navigate('/')

    getBlogContent({ id: blogId })
      .then(({ data: { data, code } }) => {
        if (code === -1) throw '服务异常，获取文章内容失败'

        setBlog(data)
      })
      .catch(e => {
        setErrorMsg(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className={style['blog-container']}>
      {loading ? (
        <Loading />
      ) : errorMsg ? (
        <ErrorTips message={errorMsg} />
      ) : (
        <>
          <PageTitle
            title={blog?.title || ''}
            subTitle={
              <BlogSubTitle
                group={blog?.group.label}
                viewCount={blog && blog.viewCount + 1}
                publishTime={blog?.publishTime}
              />
            }
          />
          <div className={'blog-main-area'}>
            <CommonReader content={blog?.content || ''} />
            <BlogNavBtn
              onClick={() => {
                setDrawerVisible(true)
              }}
            />
          </div>
          <Drawer
            visible={drawerVisible}
            onClose={() => {
              setDrawerVisible(false)
            }}
            className="blog-nav"
          >
            <MarkdownNavbar
              source={blog?.content || ''}
              headingTopOffset={20}
              ordered={false}
              onNavItemClick={() => {
                setDrawerVisible(false)
              }}
              updateHashAuto={false}
            />
          </Drawer>
        </>
      )}
    </div>
  )
}

export default Blog