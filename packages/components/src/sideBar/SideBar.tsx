import { HTMLAttributes } from 'react'
import { Icon } from '..'
import { account_circle, gear, help_outline, log_out, expand } from '@equinor/eds-icons'

import './sidebar.css'
type Props = HTMLAttributes<HTMLDivElement>
export const SideBar = ({className, ...rest }: Props) => (
  <div data-density="spacious" className={['eds-sidebar', className].join(' ')} {...rest}>
    <div className="eds-sidebar__main">
      <a href="#" className="eds-sidebar__link"><Icon icon={account_circle} /></a>
      <a href="#" className="eds-sidebar__link"><Icon icon={gear} /></a>
      <a href="#" className="eds-sidebar__link"><Icon icon={help_outline} /></a>
      <a href="#" className="eds-sidebar__link"><Icon icon={log_out} /></a>

    </div>
    <div className="eds-sidebar__footer">
      <button className="eds-sidebar__toggle"><Icon icon={expand} /></button>
    </div>
  </div>
)
