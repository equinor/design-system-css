import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Dialog } from './Dialog'
import { Text, Icon, Button } from '../'

const meta = {
  title: 'Feedback/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

//@ts-ignore
export const Default: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    return (
      <>
      <Button onClick={()=>setOpen(true)}>Open dialog</Button>
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <Text variant="body">Are you sure you want to <br /> delete this item?</Text>
        <div className="eds-dialog__actions">
          <Button onClick={()=>setOpen(false)}>Delete</Button>
          <Button variant="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
        </div>
      </Dialog>
      </>
  )},
}

