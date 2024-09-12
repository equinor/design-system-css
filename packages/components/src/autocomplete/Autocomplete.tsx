import './autocomplete.css'
import '../input/Input'
import { Input } from '../input/Input'
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
    {/* @ts-ignore */}
    <Input onFocus={openPopover} style={{anchorName: '--input'}} />
    {/* @ts-ignore */}
    <div ref={options} className="eds-autocomplete__options" popover="manual" onClick={closePopover}>
      <ul>
        <li><button>item</button></li>
        <li><button>item</button></li>
        <li><button>item</button></li>
        <li><button>item</button></li>
        <li><button>item</button></li>
      </ul>
    </div>
  </>
)}
