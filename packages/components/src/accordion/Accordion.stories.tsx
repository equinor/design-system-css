import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from './Accordion'

const meta = {
  title: 'Surfaces/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{padding: '32px'}}>
        <Accordion {...args} />
      </div>
  )},
}
