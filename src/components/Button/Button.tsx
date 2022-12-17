import classNames from 'classnames'
import React, { ReactNode } from 'react'
import s from './Button.module.scss'

type Props = {
  variant?: 'default' | 'primary'
  children: ReactNode
  className?: string
}

const Button = ({ children, variant, className, ...buttonProps }: Props) => (
  <button
    {...buttonProps}
    type="button"
    className={classNames(s.button, className, {
      [s.isPrimary]: variant === 'primary',
    })}
  >
    {children}
  </button>
)

export default Button
