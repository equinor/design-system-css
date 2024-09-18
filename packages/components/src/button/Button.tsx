import './button.css'
import { Children as ReactChildren } from 'react'
import { UIText } from '../'

type ButtonProps = {
  variant?: "error" | "warning" | "success"
} & React.HTMLAttributes<HTMLButtonElement>
export const Button = ({ children, variant, className, ...rest }: ButtonProps) => {
  const updatedChildren = ReactChildren.map(children, (child) => {
    if (typeof child === 'string' && child.trim().length > 0) {
      return <UIText>{child}</UIText>
    }
    return child
  })
  return (
  <button className={['eds-button', className].join(' ')} {...rest}>{updatedChildren}</button>
)}
