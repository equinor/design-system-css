import './button.css'
import { Children as ReactChildren, isValidElement, ReactElement, cloneElement } from 'react'
import { Text, TypographySize, Icon } from '../'

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary"
  size?: TypographySize
} & React.HTMLAttributes<HTMLButtonElement>
export const Button = ({ children, variant = 'primary', size = 'md', className, ...rest }: ButtonProps) => {
  const sizeClass = `size-${size}`
  const updatedChildren = ReactChildren.map(children, (child) => {
    if (typeof child === 'string' && child.trim().length > 0) {
      return <Text variant='ui' size={size}>{child}</Text>
    }
    if (isValidElement(child) && child.type === Icon) {
      return cloneElement(child as ReactElement, {
            size: size
          })
  }
    return child
  })
  return (
  <button className={['eds-button', sizeClass, variant, className].join(' ')} {...rest}>{updatedChildren}</button>
)}
