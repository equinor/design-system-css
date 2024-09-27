import './card.css'

type Props = {
  elevation?: 'none' | 'raised' | 'overlay'
  variant?: 'default' | 'info' | 'warning' | 'error'
  token?: boolean
} & React.HTMLAttributes<HTMLDivElement>
export const Card = ({children, className, token, elevation = 'none', variant = 'default', ...rest }: Props) => {
  const elevationParsed = `elevation-${elevation}`
  const useToken = token ? 'colors-from-tokens' : ''
  return (
   <div className={['eds-card', elevationParsed, useToken, variant, className].join(' ')} {...rest}>{children}</div>
  )}
