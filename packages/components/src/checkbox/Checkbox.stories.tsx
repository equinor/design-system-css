import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
        <Checkbox {...args} />
  )},
}