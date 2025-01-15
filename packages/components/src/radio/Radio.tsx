import './radio.css'
import {HTMLAttributes} from 'react'
import { radio_button_unselected, radio_button_selected } from '@equinor/eds-icons'

export type RadioProps = {
  name?: string
} & HTMLAttributes<HTMLInputElement>
export const Radio = ({className, ...rest }: RadioProps) => {
  return (
    <span className={['eds-radio', className].join(' ')}>
      <input type='radio' {...rest} />
      <svg
      className={['eds-icon', 'size-lg'].join(' ')}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={radio_button_selected.svgPathData as string} name='checked' />
      <path fillRule="evenodd" clipRule="evenodd" d={radio_button_unselected.svgPathData as string} name='not-checked' />
    </svg>
    </span>
)}
