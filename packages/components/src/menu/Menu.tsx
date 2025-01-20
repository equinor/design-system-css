import './menu.css'
import { Text, Icon } from '../'
import {info_circle, calendar_accept, account_circle, signature, file_copy} from '@equinor/eds-icons'

type Props =  React.HTMLAttributes<HTMLDivElement>
export const Menu = ({children, className, ...rest }: Props) => {

  return (
    /* @ts-ignore */
   <div popover="auto" className={['eds-menu', className].join(' ')} {...rest}>
    <button className='eds-menu__item'>
      <div className='eds-menu__item-inner'>
        <Icon icon={info_circle} />
        <Text variant='ui'>Hello it's a menu item with longer text hehe</Text>
      </div>
      </button>
      <button className='eds-menu__item'>
        <div className='eds-menu__item-inner'>
          <Icon icon={account_circle} />
          <Text variant='ui'>Hello it's a menu item</Text>
        </div>
      </button>
      <button className='eds-menu__item'>
        <div className='eds-menu__item-inner'>
          <Icon icon={calendar_accept} />
          <Text variant='ui'>Hello it's a menu item</Text>
        </div>
      </button>
      <button className='eds-menu__item active'>
        <div className='eds-menu__item-inner'>
          <Icon icon={file_copy} />
          <Text variant='ui'>Hello it's a menu item</Text>
          <Icon icon={signature} />
        </div>
      </button>
   </div>
  )}
