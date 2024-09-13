
type Props = {
  path: string
  size?: number
} & React.SVGAttributes<SVGElement>
export const Icon = ({ path, style, size = 24, ...rest }: Props) => {
  const pathSize = size / 24
  return (
    <svg
      style={{fontSize: `${size}px`, ...style}}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path style={{scale: `${pathSize}`}} fillRule="evenodd" clipRule="evenodd" d={path} />
    </svg>
  )}
