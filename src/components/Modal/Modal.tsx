import Button from 'components/Button'
import IconClose from 'components/Icon/IconClose'
import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import s from './Modal.module.scss'

export type ModalProps = {
  title?: string
  open: boolean
  onOk?: () => void
  onCancel?: () => void
  children?: ReactNode
}

const modalRoot = typeof window !== 'undefined' ? window.document.getElementById('modal-root') : null

const Modal = ({ title, open, onOk, onCancel, children }: ModalProps) => {
  if (!open || !modalRoot) return null

  return ReactDOM.createPortal(
    <div
      role="presentation"
      onClick={onCancel}
      className={s.wrapper}
    >
      <div
        role="presentation"
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={s.root}
      >
        <div className={s.modalHeader}>
          <p className={s.modalTitle}>{title}</p>
          <IconClose size={24} className={s.iconClose} onClick={onCancel} />
        </div>
        <div className={s.modalBody}>{children}</div>
        <div className={s.modalFooter}>
          <Button onClick={onCancel}>Close</Button>
          <Button variant="primary" onClick={onOk}>Save</Button>
        </div>
      </div>
    </div>, modalRoot,
  )
}

export default Modal
