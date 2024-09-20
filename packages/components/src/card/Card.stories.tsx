import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'
import { BodyText } from '../'

const meta = {
  title: 'Surfaces/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
        <Card {...args}>
          <div className="eds-card__content"><BodyText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nisi eaque non, tenetur eos ut, vitae ipsum voluptate cum excepturi asperiores corrupti quibusdam, doloremque adipisci in eveniet nihil? Aliquid, tenetur.</BodyText></div>
          </Card>
  )},
}
