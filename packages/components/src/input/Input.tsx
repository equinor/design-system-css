import './input.css'

type Props = {
  variant?: "error" | "warning" | "success"
  disabled?: boolean
  leftAdornments?: React.ReactNode
  rightAdornments?: React.ReactNode

} & React.HTMLAttributes<HTMLInputElement>

export const Input = ({ variant, disabled, style, className, leftAdornments, rightAdornments, ...rest }: Props) => (
  <div style={style} className={`eds-input ${variant ? variant : 'initial'} ${className ? className : ''}`} >
    <span className="adornments left">{leftAdornments}</span>
    <input disabled={disabled} type="text" {...rest} />
    <span className="adornments right">{rightAdornments}</span>
  </div>
)
