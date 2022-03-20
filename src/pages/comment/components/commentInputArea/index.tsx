import InputArea from '../inputArea'
import LabelInput from '../labelInput'
import style from './style.module.less'
import { useState } from 'react'
import { User } from '../../consts'
import { isValidEmail, isValidQQ } from '@src/utils'
import { message } from 'antd'
import Avatar from '../avatar'

const CommentInputArea = () => {
  const [nickname, setNickname] = useState(() => {
    return localStorage.getItem(User.nickname) || ''
  })
  const [avatar, setAvatar] = useState(() => {
    return localStorage.getItem(User.avatar) || ''
  })
  const [email, setEmail] = useState(() => {
    return localStorage.getItem(User.email) || ''
  })
  const [homepage, setHomepage] = useState(() => {
    return localStorage.getItem(User.homepage) || ''
  })
  const [text, setText] = useState('')

  const handleNickNameBlur = async () => {
    if (isValidQQ(nickname)) {
      try {
        const avatarUrl = `https://q1.qlogo.cn/g?b=qq&nk=${nickname}&s=640`
        setAvatar(avatarUrl)
        localStorage.setItem(User.avatar, avatarUrl)
        setNickname('')
        setEmail(`${nickname}@qq.com`)
        localStorage.setItem(User.email, `${nickname}@qq.com`)
      } catch (e) {
        console.log(e)
      }
    } else {
      if (nickname.toLowerCase() === 'admin') {
        message.success('do admin')
        // todo 验证登录，获取token，之后留言判断是否含有token请求头
        // 后端写入isAdmin
      }

      localStorage.setItem(User.nickname, nickname)
    }
  }

  const handleEmailBlur = () => {
    if (isValidEmail(email)) {
      localStorage.setItem(User.email, email)
    } else {
      message.warning('输入的邮箱格式有误')
    }
  }

  const handleSubmit = () => {
    message.success('todo')
  }

  return (
    <div className={style['commentInputArea']}>
      <Avatar src={avatar} />
      <div className="comment-inputWrapper">
        <div className="commentInput-header">
          <LabelInput
            label="昵称"
            placeHolder="来个昵称吧~"
            className="comment-header-input"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value.trim())
            }}
            onBlur={handleNickNameBlur}
          />
          <LabelInput
            label="邮箱"
            placeHolder="邮箱必填"
            className="comment-header-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.trim())
            }}
            onBlur={handleEmailBlur}
          />
          <LabelInput
            label="链接"
            placeHolder="链接选填"
            className="comment-header-input"
            onChange={(e) => {
              setHomepage(e.target.value.trim())
            }}
            value={homepage}
          />
        </div>
        <div className="commentInput-bottom">
          <InputArea
            onChange={(e) => {
              setText(e.target.value)
            }}
            value={text}
          />
          <div className="comment-send" onClick={handleSubmit}>
            发送
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentInputArea
