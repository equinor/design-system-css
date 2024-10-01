import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import { Card } from '../'
import { info_circle, warning_outlined } from '@equinor/eds-icons'


const meta = {
  title: 'navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

const tabs = [
  {label: 'item 1', icon: info_circle},
  {label: 'item 2'},
  {label: 'item 3', icon: warning_outlined},
]

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <Card token>
        <div className="eds-card__content">
        <Tabs style={{marginBlockEnd: '16px'}} tabs={tabs} token />
        <Tabs tabs={tabs} />
        </div>
      </Card>

  )},
}
