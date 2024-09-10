import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
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
     <div style={{
      backgroundColor: 'var(--eds-color-surface-default)',
      padding: '64px',
    }}>
      <Input {...args} />
    </div>)
  },
}
