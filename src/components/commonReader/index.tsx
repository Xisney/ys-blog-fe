import { FC } from 'react'
import { Viewer } from '@bytemd/react'

import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import breaks from '@bytemd/plugin-breaks'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import mermaid_2 from '@bytemd/plugin-mermaid'

import './theme/markdown.less'
import 'highlight.js/styles/github.css'
import style from './style.module.less'

interface CommonReader {
  content: string
}

const plugins = [gfm(), breaks(), mediumZoom(), mermaid_2(), highlight()]

const CommonReader: FC<CommonReader> = ({ content }) => {
  return (
    <div className={style['reader-wrapper']}>
      <Viewer value={content} plugins={plugins} />
    </div>
  )
}

export default CommonReader
