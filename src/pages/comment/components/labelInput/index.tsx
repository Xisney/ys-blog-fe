import { ChangeEvent, FC, KeyboardEvent, KeyboardEventHandler } from 'react'
import style from './style.module.less'
import cx from 'classnames'

interface LabelInputProps {
  label: string
  placeHolder?: string
  type?: 'number' | 'text'
  className?: string
  onEnter?: (data: string, target: HTMLInputElement) => void
  onChange?: (data: string) => void
  value?: string
}

const LabelInput: FC<LabelInputProps> = ({
  label,
  placeHolder = '请输入内容',
  type = 'text',
  className,
  onEnter,
  onChange,
  value,
}) => {
  const handleEnterInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return

    const target = e.target as HTMLInputElement
    if (typeof onEnter === 'function') {
      onEnter(target.value, target)
    }
    target.blur()
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value)
    }
  }

  return (
    <div className={cx(style['labelInput-wrapper'], className)}>
      <input
        type={type}
        id="textInput"
        placeholder={placeHolder}
        onKeyDown={handleEnterInput}
        onChange={handleInputChange}
        value={value}
      />
      <label htmlFor="textInput">{label}</label>
    </div>
  )
}

export default LabelInput
