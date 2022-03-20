import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
} from 'react'
import style from './style.module.less'

interface InputAreaProps {
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  placeHolder?: string
  value?: string
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
}

const InputArea: FC<InputAreaProps> = ({
  onChange,
  placeHolder = '说点什么吗？\n在昵称处输入QQ号，自动获取头像与邮箱',
  value,
  onBlur,
}) => {
  return (
    <textarea
      className={style['comment-InputTextArea']}
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
    />
  )
}

export default InputArea
