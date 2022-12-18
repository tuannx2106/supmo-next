import React from 'react'

type Props = {
  className?: string
  size?: number
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const IconClose = ({ className, size = 12, onClick }: Props) => (
  <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export default IconClose
