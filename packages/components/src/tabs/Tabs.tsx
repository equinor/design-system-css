import { useState, HTMLAttributes } from 'react'
import type { IconData } from '@equinor/eds-icons'
import { UIText, Icon } from '../'
import './tabs.css'

type Tab = {
  label: string
  icon?: IconData
}
type Props = {
    tabs?: Tab[]
    /** use colors from token */
    token?: boolean
} & HTMLAttributes<HTMLDivElement>

export const Tabs = ({ tabs, className, token, ...rest }: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(-1)
  const useToken = token ? 'colors-from-tokens' : ''
  return (
    <div className={['eds-tabs', useToken, className].join(' ')} role='tablist' {...rest}>
      {tabs?.map((tab, index) => {
        const isSelected = selectedTab === index
        return <button
          role='tab'
          aria-selected={isSelected}
          onClick={() => setSelectedTab(index)}
         >
          {tab.icon && <Icon size='sm' icon={tab.icon} />}
          <UIText>{tab.label}</UIText>
        </button>
      })}
    </div>
  )}
