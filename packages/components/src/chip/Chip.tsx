import './chip.css'
import { Children as ReactChildren } from 'react'
import { Text } from '../'

type Props = {
  variant?: 'default' | 'info' | 'warning' | 'error' | 'success'
  token?: boolean
  active?: boolean
  disabled?: boolean
} & React.HTMLAttributes<HTMLDivElement>
export const Chip = ({children, className, token, active, disabled, variant = 'default', ...rest }: Props) => {
  const typeClass = token ? 'eds-chip-token' : 'eds-chip'
  const isActive = active ? 'active' : ''
  const isDisabled = disabled ? 'disabled' : ''
  const updatedChildren = ReactChildren.map(children, (child) => {
    if (typeof child === 'string' && child.trim().length > 0) {
      return <Text variant='ui' size='sm'>{child}</Text>
    }
    return child
  })
  return (
   <div tabIndex={0} className={[typeClass, variant, isActive, isDisabled, className].join(' ')} {...rest}>{updatedChildren}</div>
  )}
