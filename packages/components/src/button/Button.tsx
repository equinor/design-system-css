import './button.css'
import { Children as ReactChildren } from 'react'
import { UIText, TypographySize } from '../'

type ButtonProps = {
  variant?: "error" | "warning" | "success"
  size?: TypographySize
} & React.HTMLAttributes<HTMLButtonElement>
export const Button = ({ children, variant, size = 'lg', className, ...rest }: ButtonProps) => {
  const sizeClass = `size-${size}`
  const updatedChildren = ReactChildren.map(children, (child) => {
    if (typeof child === 'string' && child.trim().length > 0) {
      return <UIText size={size}>{child}</UIText>
    }
    return child
  })
  return (
  <button className={['eds-button', sizeClass, className].join(' ')} {...rest}>{updatedChildren}</button>
)}
