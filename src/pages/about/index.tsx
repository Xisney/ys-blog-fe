import PageTitle from '@src/components/pageTitle'
import AboutPieChart from './components/aboutPieChart'
import { getAboutData, AboutData } from '@src/api/about'
import BaseContainer from '../components/baseContainer'
import style from './style.module.less'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'

import './theme/markdown.less'
import 'highlight.js/styles/github.css'

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
  const b = 2
  const c = a + b
  \`\`\`
`

const About = () => {
  const parseMarkdown = (dom: HTMLDivElement | null) => {
    if (!dom) return

    dom.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as HTMLElement)
    })
  }

  return (
    <BaseContainer className={style['about-container']} getData={getAboutData}>
      {(data: AboutData) => {
        return (
          <>
            <PageTitle title="关于" />
            <article className="about-mainArea">
              <div className="pie-wrapper">
                <AboutPieChart data={data.groupData} />
              </div>

              <div ref={parseMarkdown} className="card-wrapper">
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
