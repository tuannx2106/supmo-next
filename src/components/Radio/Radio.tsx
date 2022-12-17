import React, { ReactNode } from 'react'
import s from './Radio.module.scss'

type RadioProps<V = string> = {
  children?: string
  name?: string
  value?: V
}

const Radio = ({ children, name, value }: RadioProps) => (
  <div className={s.radio}>
    <input className={s.radioInput} type="radio" name={name} value={value || children?.toString()} />
    <span className={s.radioText}>{children}</span>
  </div>
)

type RadioGroupProps = {
  children: ReactNode
  name: string
}

export const RadioGroup = ({ children, name }: RadioGroupProps) => (
  <div className={s.radioGroup}>
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return React.cloneElement(child, { name });
      }
      return child;
    })}
  </div>
)

export default Radio
