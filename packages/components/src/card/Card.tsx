import './card.css'

type Props = {
  //elevation?: 'none' | 'raised' | 'overlay'
  variant?: 'default' | 'info' | 'warning' | 'error'
} & React.HTMLAttributes<HTMLDivElement>
export const Card = ({children, className, variant = 'default', ...rest }: Props) => {
  //const elevationParsed = `elevation-${elevation}`
  return (
   <div className={['eds-card', /* elevationParsed */, variant, className].join(' ')} {...rest}>{children}</div>
  )}
