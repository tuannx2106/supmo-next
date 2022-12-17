import classNames from 'classnames'
import React from 'react'
import s from './Checkbox.module.scss'

type Props<V = boolean> = {
  children?: string
  wrapperClassName?: string
  value?: V
  onChange?: () => void
}

const Checkbox = ({ children, wrapperClassName, value = false, onChange }: Props) => (
  <div className={classNames(s.root, wrapperClassName)}>
    <input
      className={s.checkbox}
      type="checkbox"
      checked={value}
      onChange={onChange}
    />
    <span className={s.text}>{children}</span>
  </div>
)

export default Checkbox
