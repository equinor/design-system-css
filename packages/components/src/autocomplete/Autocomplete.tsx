import './autocomplete.css'
import '../input/Input'
import { Input, UIText, Icon, arrow_drop_down } from '../'
import { useRef } from 'react'

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
      rightAdornments={<Icon size='lg'
      path={arrow_drop_down}
      className="eds-autocomplete__input-icon" />} />
    {/* @ts-ignore */}
    <div ref={options} className="eds-autocomplete__options" popover="manual" onClick={closePopover}>
      <ul>
        <li><UIText>Kahoot! ASA</UIText></li>
        <li><UIText>Microsoft Corporation</UIText></li>
        <li><UIText>Testla Inc</UIText></li>
        <li><UIText>Apple Inc</UIText></li>
        <li><UIText>NVIDIA corporation</UIText></li>
      </ul>
    </div>
  </>
)}
