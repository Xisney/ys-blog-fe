import InputArea from '../inputArea'
import LabelInput from '../labelInput'
import style from './style.module.less'
import { FC, useContext, useState } from 'react'
import { User } from '../../consts'
import { isValidEmail, isValidQQ, isValidUrl } from '@src/utils'
import { message } from 'antd'
import Avatar from '../avatar'
import { login, sendComment, SendCommentData } from '@src/api/comment'
import { commentDataContext } from '../../context'
import cx from 'classnames'

interface CommentInputAreaProps {
  className?: string
  parentId?: number
}

const CommentInputArea: FC<CommentInputAreaProps> = ({
  className,
  parentId,
}) => {
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
  const [content, setContent] = useState('')

  const setData = useContext(commentDataContext)

  const [showLogin, setShowLogin] = useState(false)

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
        setShowLogin(true)
      } else {
        localStorage.setItem(User.nickname, nickname)
      }
    }
  }

  const handleSubmit = async () => {
    if (email === '' || !isValidEmail(email)) {
      message.warning('请输入邮箱')
      return
    }

    if (nickname === '') {
      message.warning('输入一个昵称吧')
      return
    }

    if (content === '') {
      message.warning('内容不能为空哦~')
      return
    }

    if (homepage && !isValidUrl(homepage)) {
      message.warning('输入的链接无效')
      return
    }

    const sendData: SendCommentData = {
      email,
      nickname,
      avatar,
      homepage,
      content,
      parentId: parentId ?? 0,
    }

    message.loading({ content: '提交中...', key: 'submitComment' })
    const {
      data: {
        data: { id, publishTime, isAdmin },
        code,
      },
    } = await sendComment(sendData)

    if (code === -1) {
      message.error({ content: '服务异常，留言失败', key: 'submitComment' })
    } else {
      message.success({ content: '留言成功', key: 'submitComment' })
      setData((preData: any) => {
        return {
          ...preData,
          data: [{ ...sendData, id, publishTime, isAdmin }, ...preData.data],
        }
      })
      setContent('')
    }
  }

  return (
    <div className={cx(style['commentInputArea'], className)}>
      <Avatar src={avatar} />
      <div className="comment-inputWrapper">
        <div className="commentInput-header">
          <LabelInput
            label="昵称"
            placeHolder="来个昵称吧~"
            className="comment-header-input"
            value={nickname}
            onChange={e => {
              setNickname(e.target.value.trim())
            }}
            onBlur={handleNickNameBlur}
          />
          <LabelInput
            label="邮箱"
            placeHolder="邮箱必填"
            className="comment-header-input"
            value={email}
            onChange={e => {
              setEmail(e.target.value.trim())
            }}
          />
          <LabelInput
            label="链接"
            placeHolder="链接选填"
            className="comment-header-input"
            onChange={e => {
              setHomepage(e.target.value.trim())
            }}
            value={homepage}
          />
        </div>
        <div className="commentInput-bottom">
          <InputArea
            onChange={e => {
              setContent(e.target.value)
            }}
            value={content}
          />
          <div className="comment-send" onClick={handleSubmit}>
            发送
          </div>
        </div>
      </div>
      <AdminLogin
        show={showLogin}
        onClose={() => {
          setShowLogin(false)
        }}
        onConfirm={async (email, psw) => {
          const {
            data: { code },
          } = await login({ email, psw })

          if (code === -1) {
            message.error('用户名或密码异常，登录失败')
            return
          }

          setShowLogin(false)
          message.success('欢迎你,YS')
          setNickname('YS')
          localStorage.setItem(User.nickname, 'YS')
          setAvatar(`https://q1.qlogo.cn/g?b=qq&nk=2105642104&s=640`)
          localStorage.setItem(
            User.avatar,
            'https://q1.qlogo.cn/g?b=qq&nk=2105642104&s=640'
          )
        }}
      />
    </div>
  )
}

interface AdminLoginProps {
  show?: boolean
  onClose?: () => void
  onConfirm?: (email: string, psw: string) => void
}

const AdminLogin: FC<AdminLoginProps> = ({ show, onClose, onConfirm }) => {
  const [email, setEmail] = useState('')
  const [psw, setPsw] = useState('')

  return (
    <div className={cx('admin-login', { 'admin-login-show': show })}>
      <div>
        <LabelInput
          label="邮箱"
          className="admin-input"
          value={email}
          onChange={e => {
            setEmail(e.target.value.trim())
          }}
        />
        <LabelInput
          label="密码"
          className="admin-input"
          value={psw}
          onChange={e => {
            setPsw(e.target.value.trim())
          }}
          type="password"
        />
      </div>
      <div className="login-btns">
        <div className="login-btn" onClick={onClose}>
          取消
        </div>
        <div
          className="login-btn"
          onClick={() => {
            if (typeof onConfirm === 'function') onConfirm(email, psw)
          }}
        >
          登录
        </div>
      </div>
    </div>
  )
}

export default CommentInputArea
