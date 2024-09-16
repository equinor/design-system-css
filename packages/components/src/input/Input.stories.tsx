import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'
import { BodyText } from '../Typography'

const meta = {
  title: 'Inputs/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'start', gap: '16px'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <BodyText color='primary'>generated focus</BodyText>
          <Input {...args} />
          <Input variant='error' />
          <Input variant='warning' />
          <Input variant='success' />

        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <BodyText color='primary'>Original tokens (focused)</BodyText>
          <Input className='debug' {...args}  />
          <Input className='debug' variant='error' />
          <Input className='debug' variant='warning' />
          <Input className='debug' variant='success' />
        </div>
      </div>
    )},
}
