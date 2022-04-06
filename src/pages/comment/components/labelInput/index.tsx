import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEvent,
} from 'react'
import style from './style.module.less'
import cx from 'classnames'

interface LabelInputProps {
  label: string
  placeHolder?: string
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  value?: string
  type?: 'text' | 'password'
}

const LabelInput: FC<LabelInputProps> = ({
  label,
  placeHolder = '请输入内容',
  className,
  onChange,
  onBlur,
  value,
  type,
}) => {
  const handleEnterInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return

    const target = e.target as HTMLInputElement
    // 输入enter，input直接blur，具体逻辑交给onBlur处理，防止重复调用
    target.blur()
  }

  return (
    <div className={cx(style['labelInput-wrapper'], className)}>
      <input
        type={type}
        id="textInput"
        placeholder={placeHolder}
        onKeyDown={handleEnterInput}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        autoComplete="off"
      />
      <label htmlFor="textInput">{label}</label>
    </div>
  )
}

export default LabelInput
