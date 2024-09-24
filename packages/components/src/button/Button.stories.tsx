import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import {Icon, UIText} from '../'
import { add, expand, close } from '../icon'

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
        <Button {...args}><Icon path={add} />Text child</Button>
        <Button {...args}><Icon path={add} /></Button>
        <Button {...args}>Only Text</Button>
        <Button><Icon path={add} /><UIText>Hello</UIText></Button>
        <Button><Icon path={add} />Both sides<Icon path={close} /></Button>
        <Button>Hello<Icon path={expand} /></Button>
        <Button>Two icons<Icon path={add} /><Icon path={close} /></Button>
      </div>
  )},
}
