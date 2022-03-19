import { FC } from 'react'
import style from './style.module.less'

interface InputAreaProps {
  onChange?: (e: any) => void
  placeHolder?: string
}

const InputArea: FC<InputAreaProps> = ({
  onChange,
  placeHolder = '说点什么吗？\n在昵称处输入QQ号，自动获取头像与邮箱',
}) => {
  return (
    <textarea
      className={style['comment-InputTextArea']}
      placeholder={placeHolder}
      onChange={onChange}
    />
  )
}

export default InputArea
