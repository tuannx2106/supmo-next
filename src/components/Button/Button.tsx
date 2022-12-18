import classNames from 'classnames'
import React, { ReactNode } from 'react'
import s from './Button.module.scss'

type Props = {
  variant?: 'default' | 'primary'
  size?: 'default' | 'large'
  children: ReactNode
  className?: string
  onClick?: () => void
  loading?: boolean
}

const Button = ({
  children,
  variant = 'default',
  className,
  onClick,
  size = 'default',
  loading = false,
}: Props) => (
  <button
    onClick={onClick}
    type="button"
    className={classNames(s.button, className, {
      [s.isPrimary]: variant === 'primary',
      [s.isLg]: size === 'large',
      [s.isLoading]: loading,
    })}
  >
    {children}
  </button>
)

export default Button
