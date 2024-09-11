import './input.css'

type Props = {
  variant?: "error" | "warning" | "success"
} & React.HTMLAttributes<HTMLInputElement>

export const Input = ({ variant, ...rest }: Props) => (
  <div className={`eds-input ${variant ? variant : ''}`} {...rest}>
    <input type="text" />
  </div>
)
