import PageTitle from '@src/components/pageTitle'
import AboutPieChart from './components/aboutPieChart'
import { getAboutData, AboutData } from '@src/api/about'
import BaseContainer from '../components/baseContainer'
import style from './style.module.less'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'

import './markdown.less'
import 'highlight.js/styles/github.css'
import { useEffect, useRef } from 'react'

const markdown = `
  ## 关于本站
  * React博客系统
  + 包含前台后台
  + 手写
  > ssss
***
  ## 关于我
  + 前端狗
  - 学生
  \`\`\`js
  const a = 1
  \`\`\`
`

const About = () => {
  const markRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    markRef.current?.querySelectorAll('code').forEach(el => {
      hljs.highlightElement(el)
    })
  }, [])

  return (
    <BaseContainer className={style['about-container']} getData={getAboutData}>
      {(data: AboutData) => {
        return (
          <>
            <PageTitle title="关于" />
            <article className="about-mainArea">
              <AboutPieChart data={data.groupData} />
              <div ref={markRef}>
                <ReactMarkdown className="markdown-body">
                  {markdown}
                </ReactMarkdown>
              </div>
            </article>
          </>
        )
      }}
    </BaseContainer>
  )
}

export default About
