import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Icon } from '../icon'
import { search } from '@equinor/eds-icons'

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
      <form style={{display: 'flex', justifyContent: 'center', alignItems: 'start', gap: '16px'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <Input {...args} placeholder="placeholder text" />
          <Input leftAdornments={<Icon icon={search} size="md" />} variant='error' />
          <Input required placeholder="required" />
          <Input variant='success' />

        </div>
      </form>
    )},
}
