import './dialog.css'
import {useRef, useEffect} from 'react'
import { Text } from '../Typography'
import { Button } from '../button/Button'
import { Icon } from '../icon'
import { close } from '@equinor/eds-icons'
import {
  useGlobalKeyPress,
} from '@equinor/eds-utils'

type Props = {
  token?: boolean
  open: boolean
  onClose?: () => void
} & React.HTMLAttributes<HTMLDialogElement>
export const Dialog = ({children, className, open, onClose, token, ...rest }: Props) => {
  const useToken = token ? 'colors-from-tokens' : ''
  const localRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (open) {
      localRef?.current?.showModal()
    } else {
      localRef?.current?.close()
    }
  }, [open])
  useGlobalKeyPress('Escape', (e) => {
    e.preventDefault()
    if (onClose && open) {
      onClose && onClose()
    }
  })

  return (
   <dialog ref={localRef} className={['eds-dialog', useToken, className].join(' ')} {...rest}>
    <div className="eds-dialog__inner">
      <div className="eds-dialog__header">
        <Text variant='body'>Dialog heading</Text>
        <Button variant="tertiary" data-icon onClick={()=> onClose && onClose()}><Icon icon={close} /></Button>
      </div>
      <div className="eds-dialog__content">
        {children}
      </div>
    </div>
  </dialog>
  )}


