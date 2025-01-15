import { HTMLAttributes } from 'react'
import './banner.css'


type Props = HTMLAttributes<HTMLDivElement>

export const Banner = ({className, children, ...rest }: Props) => {
  return (
    <div className={['eds-banner', className].join(' ')} {...rest}>
      {children}
    </div>
  )}
