import { FC } from 'react'
import style from './style.module.less'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'

import './theme/markdown.less'
import 'highlight.js/styles/github.css'

import remarkGfm from 'remark-gfm'

const remarkPlugins = [remarkGfm]

interface CommonReader {
  content: string
}

const CommonReader: FC<CommonReader> = ({ content }) => {
  const parseMarkdown = (dom: HTMLDivElement | null) => {
    if (!dom) return

    dom.querySelectorAll('pre code').forEach(el => {
      hljs.highlightElement(el as HTMLElement)
    })
  }

  return (
    <div ref={parseMarkdown} className={style['reader-wrapper']}>
      <ReactMarkdown className="markdown-body" remarkPlugins={remarkPlugins}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default CommonReader
