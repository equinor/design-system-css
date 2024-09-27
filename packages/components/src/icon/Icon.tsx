
import './icon.css'
import { TypographySize } from '../'
import type { IconData } from '@equinor/eds-icons'
export type IconProps = {
  icon: IconData
  size?: TypographySize
} & React.SVGAttributes<SVGElement>
export const Icon = ({ icon, className, size = 'lg', ...rest }: IconProps) => {
  const sizeClass = `size-${size}`
  return (
    <svg
      className={['eds-icon', sizeClass, className].join(' ')}
      {...rest}
    >
      {Array.isArray(icon.svgPathData) ? (
        icon.svgPathData.map((pathData) => {
          return <path key={pathData} fillRule="evenodd" clipRule="evenodd" d={pathData}/>
        })
      ) : (
        <path fillRule="evenodd" clipRule="evenodd" d={icon.svgPathData}/>
      )}
    </svg>
  )}
