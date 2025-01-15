import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from './Radio'
import { Text } from '../Typography'

const meta = {
  title: 'Inputs/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <div>
          <label className='eds-label'><Radio name="a" /><Text>Radio button</Text></label>
          <label className='eds-label'><Radio name="a" /><Text>Radio button</Text></label>
          <label className='eds-label'><Radio name="a" /><Text>Radio button</Text></label>
      </div>
  )},
}
