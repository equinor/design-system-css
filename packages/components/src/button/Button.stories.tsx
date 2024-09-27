import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import {Icon, UIText} from '../'
import {add, expand, close } from '@equinor/eds-icons'

const meta = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{display: 'flex', gap: '8px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
        <Button {...args}><Icon icon={add} />Text child</Button>
        <Button {...args}><Icon icon={add} /></Button>
        <Button {...args}>Only Text</Button>
        <Button><Icon icon={add} /><UIText>Hello</UIText></Button>
        <Button><Icon icon={add} />Both sides<Icon icon={close} /></Button>
        <Button>Hello<Icon icon={expand} /></Button>
        <Button>Two icons<Icon icon={add} /><Icon icon={close} /></Button>
      </div>
  )},
}
