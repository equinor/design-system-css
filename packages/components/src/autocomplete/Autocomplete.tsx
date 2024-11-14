import './autocomplete.css'
import '../input/Input'
import { Input, Text, Icon } from '../'
import { useRef } from 'react'
import {arrow_drop_down} from '@equinor/eds-icons'

export const Autocomplete = () => {
  const options = useRef<HTMLDivElement>(null)
  const openPopover = () => {
    options.current?.showPopover()
  }
  const closePopover = () => {
    options.current?.hidePopover()
  }

  return (
  <>

    <Input
      onFocus={openPopover}
      /* @ts-ignore */
      style={{anchorName: '--input'}}
      rightAdornments={
      <Icon size='lg'
        icon={arrow_drop_down}
        className="eds-autocomplete__input-icon"
      />} />
    {/* @ts-ignore */}
    <div ref={options} className="eds-autocomplete__options" popover="manual" onClick={closePopover}>
      <ul>
        <li><Text varaint='ui'>Kahoot! ASA</Text></li>
        <li><Text varaint='ui'>Microsoft Corporation</Text></li>
        <li><Text varaint='ui'>Testla Inc</Text></li>
        <li><Text varaint='ui'>Apple Inc</Text></li>
        <li><Text varaint='ui'>NVIDIA corporation</Text></li>
      </ul>
    </div>
  </>
)}
