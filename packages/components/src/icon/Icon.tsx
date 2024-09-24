
import './icon.css'
import { TypographySize } from '../'
export type IconProps = {
  path: string
  size?: TypographySize
} & React.SVGAttributes<SVGElement>
export const Icon = ({ path, className, size = 'lg', ...rest }: IconProps) => {
  const sizeClass = `size-${size}`
  return (
    <svg
      className={['eds-icon', sizeClass, className].join(' ')}
      {...rest}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path} />
    </svg>
  )}
