import type { Meta, StoryObj } from '@storybook/react'

import { Autocomplete } from './Autocomplete'

const meta = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
        <Autocomplete {...args} />
  )},
}
