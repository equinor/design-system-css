import type { Meta, StoryObj } from '@storybook/react'

import { Banner } from './Banner'
import { Text, Icon } from '../'
import { alarm } from '@equinor/eds-icons'

const meta = {
  title: 'Feedback/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
        <Banner {...args} >
          <Icon icon={alarm}></Icon>
          <Text>But what about banner actions? What should it look like with multiple lines of text?</Text>
        </Banner>
  )},
}
