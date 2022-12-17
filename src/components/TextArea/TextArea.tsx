import classnames from 'classnames'
import React, { TextareaHTMLAttributes } from 'react'

import s from './TextArea.module.scss'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props<T = any> = TextareaHTMLAttributes<T>

const TextArea: React.FC<Props> = ({ className, ...textAreaProps }) => (
  <textarea {...textAreaProps} className={classnames(s.textarea, className)} />
)

export default TextArea
