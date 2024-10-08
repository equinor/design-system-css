import type { Meta, StoryObj } from '@storybook/react'

import { Chip } from './Chip'
import { BodyText, Icon, Card } from '../'
import { add, expand, close, info_circle, warning_outlined } from '@equinor/eds-icons'


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
      <Card>
        <div className="eds-card__content" style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <BodyText color='primary'>Chips with original tokens</BodyText>
          <div style={{display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px'}}>
      {/*      <Chip {...args}>I'm a chip</Chip>
            <Chip ><Icon size={24} icon={info_circle} /><UIText>default UIText</UIText></Chip>
            <Chip><Icon size={'xs'} icon={info_circle} />Both sides<Icon size={'xs'} icon={close} /></Chip>
            <Chip><Icon size={'xs'} icon={warning_outlined} />warning</Chip>
            <Chip><Icon size={'xs'} icon={add} /></Chip> */}
            <Chip token><Icon size={'xs'} icon={info_circle} />Default chip</Chip>
            <Chip token active><Icon size={'xs'} icon={info_circle} />Chip active</Chip>
            <Chip token disabled><Icon size={'xs'} icon={info_circle} />Chip disabled</Chip>
            <Chip token variant='info'><Icon size={'xs'} icon={info_circle} />Info</Chip>
            <Chip token variant='warning'><Icon size={'xs'} icon={info_circle} />Warning</Chip>
            <Chip token variant='error'><Icon size={'xs'} icon={info_circle} />Error</Chip>
            <Chip token variant='success'><Icon size={'xs'} icon={info_circle} />Success</Chip>
        </div>
        <BodyText color='primary'>Chips with generated colors</BodyText>
        <div style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
            <Chip><Icon size={'xs'} icon={info_circle} />Default chip</Chip>
            <Chip active><Icon size={'xs'} icon={info_circle} />Chip active</Chip>
            <Chip disabled><Icon size={'xs'} icon={info_circle} />Chip disabled</Chip>
            <Chip variant='info'><Icon size={'xs'} icon={info_circle} />Info</Chip>
            <Chip variant='warning'><Icon size={'xs'} icon={info_circle} />Warning</Chip>
            <Chip variant='error'><Icon size={'xs'} icon={info_circle} />Error</Chip>
            <Chip variant='success'><Icon size={'xs'} icon={info_circle} />Success</Chip>
        </div>
      </div>
    </Card>
  )},
}
