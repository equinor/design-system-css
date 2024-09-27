import './checkbox.css'
import { checkbox, checkbox_outline } from '@equinor/eds-icons'

type CheckboxProps = {
  label?: string
} & React.HTMLAttributes<HTMLInputElement>
export const Checkbox = ({className, label, ...rest }: CheckboxProps) => {
  return (
    <span className={['eds-checkbox', className].join(' ')}>
      <input type='checkbox' {...rest} />
      <svg
      className={['eds-icon', 'size-lg'].join(' ')}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={checkbox.svgPathData as string} name='checked' />
      <path fillRule="evenodd" clipRule="evenodd" d={checkbox_outline.svgPathData as string} name='not-checked' />
    </svg>
    </span>
)}
