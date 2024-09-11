import './input.css'

type Props = {
  variant?: "error" | "warning" | "success"
}

export const Input = ({ variant }: Props) => (
  <div className={`eds-input ${variant ? variant : ''}`}>
    <input type="text" />
  </div>
)
