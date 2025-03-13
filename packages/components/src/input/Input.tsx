import './input.css'
import { useRef, HTMLAttributes } from 'react'

type Props = {
  variant?: "error" | "warning" | "success"
  disabled?: boolean
  type?: string
  required?: boolean
  placeholder?: string
  leftAdornments?: React.ReactNode
  rightAdornments?: React.ReactNode

} & HTMLAttributes<HTMLInputElement>

export const Input = ({ variant, disabled, style, className, type = 'text', leftAdornments, rightAdornments, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
  <div
    data-color
    style={style}
    className={`eds-input ${variant ? variant : 'initial'} ${className ? className : ''}`}
    onClick={()=>{inputRef.current?.focus()}}
  >
    <span className="adornments left">{leftAdornments}</span>
    <input ref={inputRef} disabled={disabled} type={type} {...rest} />
    <span className="adornments right">{rightAdornments}</span>
  </div>
)}
