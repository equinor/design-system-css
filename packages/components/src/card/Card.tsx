import './card.css'

type Props = {
  tinted?: boolean
} & React.HTMLAttributes<HTMLDivElement>
export const Card = ({children, className, tinted, ...rest }: Props) => {
  return (
   <div data-color className={['eds-card', tinted && 'tinted', className].join(' ')} {...rest}>{children}</div>
  )}
