import './checkbox.css'
import { checkbox, checkbox_outline } from '../icon'

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
      <path fillRule="evenodd" clipRule="evenodd" d={checkbox} name='checked' />
      <path fillRule="evenodd" clipRule="evenodd" d={checkbox_outline} name='not-checked' />
    </svg>
    </span>
)}
