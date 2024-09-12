
type Props = {
  path: string
  size?: number
} & React.SVGAttributes<SVGElement>
export const Icon = ({ path, size = 24, ...rest }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path fillRule="evenodd" clipRule="evenodd" d={path} />
  </svg>
)
