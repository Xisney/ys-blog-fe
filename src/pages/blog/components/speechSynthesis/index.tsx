import { FC, useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import {
  AudioOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons'

import style from './style.module.less'
import { message } from 'antd'
import { PlayState, specailCode } from './consts'

interface SpeechProps {
  content: string
  className?: string
}

const Speech: FC<SpeechProps> = ({ content, className }) => {
  const speechRef = useRef(window.speechSynthesis)
  const [state, setState] = useState<PlayState>(PlayState.notRead)

  useEffect(() => {
    return () => {
      const speech = speechRef.current

      if (speech) speech.cancel()
    }
  }, [])

  const handleRead = () => {
    const speech = speechRef.current

    if (!speech) {
      message.warning('你的浏览器暂不支持此功能')
      return
    }

    if (state === PlayState.notRead) {
      const utter = new SpeechSynthesisUtterance(
        content.replaceAll(specailCode, '')
      )

      utter.pitch = 1
      utter.rate = 1.6
      speech.speak(utter)

      utter.onend = () => {
        setState(PlayState.notRead)

        utter.onpause = null
        utter.onresume = null
        utter.onend = null
      }

      utter.onpause = () => {
        setState(PlayState.paused)
      }

      utter.onresume = () => {
        setState(PlayState.speaking)
      }

      setState(PlayState.speaking)
    } else {
      speech.paused ? speech.resume() : speech.pause()
    }
  }

  return (
    <span
      className={cx(className, style['speech-container'])}
      onClick={handleRead}
    >
      {state === PlayState.notRead && <AudioOutlined className="speech-icon" />}
      {state !== PlayState.notRead && (
        <>
          {state === PlayState.paused ? (
            <PlayCircleOutlined className="speech-icon" />
          ) : (
            <PauseCircleOutlined className="speech-icon" />
          )}
        </>
      )}
    </span>
  )
}

export default Speech
