import { HTMLAttributes } from 'react'
import './snackbar.css'


type Props = HTMLAttributes<HTMLDivElement>

export const Snackbar = ({className, children, ...rest }: Props) => {
  return (
      /* @ts-ignore */
      <div popover="auto" className={['eds-snackbar', className].join(' ')} {...rest}>
        {children}
      </div>
  )}
