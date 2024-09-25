import type { Meta, StoryObj } from '@storybook/react'

import { SideBar } from './SideBar'

const meta = {
  title: 'Navigation/SideBar',
  component: SideBar,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof SideBar>

export default meta
type Story = StoryObj<typeof meta>

const args = {}

export const Default: Story = {
  args: args,
  render: (args) => {
    return (
      <div
        style={{
          height: '50vh',
          margin: '-40px -28px'
        }}
      >
        <SideBar {...args} />
      </div>
    )
  },
}
