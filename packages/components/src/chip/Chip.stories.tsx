import type { Meta, StoryObj } from '@storybook/react'

import { Chip } from './Chip'
import { UIText, Icon } from '../'
import { add, expand, close, info_circle, warning_outlined } from '../icon'


const meta = {
  title: 'data display/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
   {/*      <Chip {...args}>I'm a chip</Chip>
        <Chip ><Icon size={24} path={info_circle} /><UIText>default UIText</UIText></Chip>
        <Chip><Icon size={16} path={info_circle} />Both sides<Icon size={16} path={close} /></Chip>
        <Chip><Icon size={16} path={warning_outlined} />warning</Chip>
        <Chip><Icon size={16} path={add} /></Chip> */}
        <Chip token><Icon size={16} path={info_circle} />Default chip</Chip>
        <Chip token active><Icon size={16} path={info_circle} />Chip active</Chip>
        <Chip token disabled><Icon size={16} path={info_circle} />Chip disabled</Chip>
        <Chip token variant='info'><Icon size={16} path={info_circle} />Info</Chip>
        <Chip token variant='warning'><Icon size={16} path={info_circle} />Warning</Chip>
        <Chip token variant='error'><Icon size={16} path={info_circle} />Error</Chip>
        <Chip token variant='success'><Icon size={16} path={info_circle} />Success</Chip>
     </div>
  )},
}
