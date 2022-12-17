import classNames from 'classnames'
import IconClose from 'components/Icon/IconClose'
import React from 'react'
import s from './Tag.module.scss'

type TagProps = {
  children: string
  type?: 'default' | 'purple'
  size?: 'default' | 'large'
  onClose?: () => void
  onClick?: () => void
}

const Tag = ({ children, type = 'default', size = 'default', onClose, onClick }: TagProps) => (
  <div
    role="presentation"
    onClick={onClick}
    className={classNames(s.tag, {
      [s.isPurple]: type === 'purple',
      [s.isLg]: size === 'large',
      [s.isClickable]: !!onClick,
    })}
  >
    <span className={s.text}>{children}</span>
    {onClose && (
    <IconClose
      onClick={(e) => {
        e.stopPropagation()
        onClose()
      }}
      className={s.icon}
    />
    )}
  </div>
)

export default Tag
