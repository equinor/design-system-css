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
  render: () => {
    return (
      <div>
        <div style={{padding: '32px', backgroundColor: 'var(--eds-ui-main-color-surface)'}}>
          <Table caption='on ui-main-color-surface' />
        </div>
        <div data-level="2" style={{padding: '32px', backgroundColor: 'var(--eds-ui-shell-color-surface)'}}>
          <Table caption='on ui-shell-color-surface' />
        </div>
        <div data-level="3" style={{padding: '32px', backgroundColor: 'var(--eds-ui-floating-color-surface)'}}>
          <Table caption='on ui-floating-color-surface' />
        </div>
      </div>
  )},
}
