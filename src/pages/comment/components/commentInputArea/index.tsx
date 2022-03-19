import InputArea from '../inputArea'
import LabelInput from '../labelInput'
import style from './style.module.less'
import { useState } from 'react'
import { User } from '../../consts'

const CommentInputArea = () => {
  const [avatar, setAvatar] = useState(() => {
    return (
      window.localStorage.getItem(User.avatar) ||
      'https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210807103114.png'
    )
  })

  const handleNickNameInput = async (
    nickname: string,
    target: HTMLInputElement
  ) => {
    console.log(nickname)

    if (/^\d{5,}$/.test(nickname)) {
      try {
        const avatarUrl = `https://q1.qlogo.cn/g?b=qq&nk=${nickname}&s=640`
        setAvatar(avatarUrl)
        localStorage.setItem(User.avatar, avatarUrl)
        target.value = ''
      } catch (e) {}
    }
  }

  return (
    <div className={style['commentInputArea']}>
      <img src={avatar} alt="avatar" />
      <div className="comment-inputWrapper">
        <div className="commentInput-header">
          <LabelInput
            label="昵称"
            placeHolder="来个昵称吧~"
            className="comment-header-input"
            onEnter={handleNickNameInput}
          />
          <LabelInput
            label="邮箱"
            placeHolder="邮箱必填"
            className="comment-header-input"
          />
          <LabelInput
            label="昵称"
            placeHolder="链接选填"
            className="comment-header-input"
          />
        </div>
        <div className="commentInput-bottom">
          <InputArea />
        </div>
      </div>
    </div>
  )
}

export default CommentInputArea
