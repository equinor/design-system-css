import './chip.css'
import { Children as ReactChildren } from 'react'
import { UIText } from '../'

type Props = {
  variant?: 'default' | 'info' | 'warning' | 'error'
} & React.HTMLAttributes<HTMLDivElement>
export const Chip = ({children, className, variant = 'default', ...rest }: Props) => {
  const updatedChildren = ReactChildren.map(children, (child) => {
    if (typeof child === 'string' && child.trim().length > 0) {
      return <UIText size='sm'>{child}</UIText>
    }
    return child
  })
  return (
   <div className={['eds-chip', variant, className].join(' ')} {...rest}>{updatedChildren}</div>
  )}
