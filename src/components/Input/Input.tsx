import classNames from 'classnames'
import React, { InputHTMLAttributes } from 'react'
import s from './Input.module.scss'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props<T = any> = InputHTMLAttributes<T> & {
  variant?: 'default' | 'large'
  iconSrc?: string
  wrapperClassName?: string
}

const Input: React.FC<Props> = ({ iconSrc, wrapperClassName, className, variant = 'default', ...inputProps }) => (
  <div className={classNames(s.root, wrapperClassName, {
    [s.isLg]: variant === 'large',
  })}
  >
    {iconSrc && <img className={s.icon} src={iconSrc} alt="icon" />}
    <input
      {...inputProps}
      className={classNames(s.input, className)}
    />
  </div>
)

export default Input
