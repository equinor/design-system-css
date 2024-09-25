import type { Meta, StoryObj } from '@storybook/react'

import { Table } from './Table'

const meta = {
  title: 'data display/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
        <Table {...args} />
  )},
}
