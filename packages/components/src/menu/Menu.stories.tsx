import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Menu } from './Menu'
import { Text, Icon, Button } from '../'

const meta = {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    return (
      <>
      {/* @ts-ignore */}
        <Button  popovertarget="m1" style={{anchorName: '--m-anchor'}}>Open menu</Button>
        <Menu id="m1" />
      </>
  )},
}
