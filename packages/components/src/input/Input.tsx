import './input.css'
import { useRef } from 'react'

type Props = {
  variant?: "error" | "warning" | "success"
  disabled?: boolean
  leftAdornments?: React.ReactNode
  rightAdornments?: React.ReactNode

} & React.HTMLAttributes<HTMLInputElement>

export const Input = ({ variant, disabled, style, className, leftAdornments, rightAdornments, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
  <div
    style={style}
    className={`eds-input ${variant ? variant : 'initial'} ${className ? className : ''}`}
    onClick={()=>{inputRef.current?.focus()}}
  >
    <span className="adornments left">{leftAdornments}</span>
    <input ref={inputRef} disabled={disabled} type="text" {...rest} />
    <span className="adornments right">{rightAdornments}</span>
  </div>
)}
