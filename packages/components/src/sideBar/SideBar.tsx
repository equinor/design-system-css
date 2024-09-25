import { HTMLAttributes } from 'react'
import { Icon } from '..'
import { account_circle, gear, help_outline, log_out, expand } from '../icon'

import './sidebar.css'
type Props = HTMLAttributes<HTMLDivElement>
export const SideBar = ({className, ...rest }: Props) => (
  <div className={['eds-sidebar', className].join(' ')} {...rest}>
    <div className="eds-sidebar__main">
      <a href="#" className="eds-sidebar__link"><Icon path={account_circle} /></a>
      <a href="#" className="eds-sidebar__link"><Icon path={gear} /></a>
      <a href="#" className="eds-sidebar__link"><Icon path={help_outline} /></a>
      <a href="#" className="eds-sidebar__link"><Icon path={log_out} /></a>

    </div>
    <div className="eds-sidebar__footer">
      <button className="eds-sidebar__toggle"><Icon path={expand} /></button>
    </div>
  </div>
)
