import './input.css'

type Props = {
  variant?: "error" | "warning" | "success"
  disabled?: boolean

} & React.HTMLAttributes<HTMLInputElement>

export const Input = ({ variant, disabled, style, className, ...rest }: Props) => (
  <div style={style} className={`eds-input ${variant ? variant : 'initial'} ${className ? className : ''}`} >
    <input disabled={disabled} type="text" {...rest} />
  </div>
)
