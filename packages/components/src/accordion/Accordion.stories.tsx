import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from './Accordion'

const meta = {
  title: 'Surfaces/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
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
      <Accordion {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quaerat saepe? Nobis obcaecati nesciunt blanditiis nam reprehenderit eum repellat. Ipsa porro incidunt modi. Adipisci nisi doloremque ex voluptatem laboriosam quisquam.</Accordion>
  )},
}
