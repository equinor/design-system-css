import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../'
import { Snackbar } from './Snackbar'
import { Text, Icon } from '../'
import { alarm } from '@equinor/eds-icons'

const meta = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Snackbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <>
      {/* @ts-ignore */}
      <Button popovertarget="s1">Open snackbar</Button>
        <Snackbar {...args} id="s1" >
          <Icon icon={alarm}></Icon>
          <Text>Im a snackbar!</Text>
          <Button style={{marginLeft: 'auto', backgroundColor: 'canvasText'}}>Button</Button>
        </Snackbar>
      </>
  )},
}
