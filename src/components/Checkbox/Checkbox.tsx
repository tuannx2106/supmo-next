import classNames from 'classnames'
import React from 'react'
import s from './Checkbox.module.scss'

type Props = {
  children?: string
  wrapperClassName?: string
}

const Checkbox = ({ children, wrapperClassName }: Props) => (
  <div className={classNames(s.root, wrapperClassName)}>
    <input className={s.checkbox} type="checkbox" />
    <span className={s.text}>{children}</span>
  </div>
)

export default Checkbox
