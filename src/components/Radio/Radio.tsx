/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactNode } from 'react'
import s from './Radio.module.scss'

type RadioProps<V = string> = {
  children?: string
  name?: string
  value?: V
  onChange?: (value: V) => void
  checked?: boolean
}

const Radio = ({ children, name, value, checked, onChange }: RadioProps) => (
  <div className={s.radio}>
    <input
      className={s.radioInput}
      type="radio"
      name={name}
      checked={checked}
      value={value || children?.toString()}
      onChange={(e) => {
        onChange?.(e.target.value)
      }}
    />
    <span className={s.radioText}>{children}</span>
  </div>
)

type RadioGroupProps<T = string> = {
  children: ReactNode
  name: string
  value: T
  onChange: (value: T) => void
}

export const RadioGroup = ({ children, name, value, onChange }: RadioGroupProps) => (
  <div className={s.radioGroup}>
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          // @ts-ignore
          name,
          checked: child.props.value === value,
          onChange,
        });
      }
      return child;
    })}
  </div>
)

export default Radio
