import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'
import { Text, Icon, Button } from '../'
import {add_circle_outlined} from '@equinor/eds-icons'

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
      <>
        <Card {...args}>
          <div className="eds-card__content u-rich-text">
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nisi eaque non, tenetur eos ut, vitae ipsum voluptate cum excepturi asperiores corrupti quibusdam, doloremque <strong>Multiline</strong> with inline icons <Icon size='xs' icon={add_circle_outlined} /><Icon size='sm' icon={add_circle_outlined} /><Icon size='md' icon={add_circle_outlined} /><Icon size='lg' icon={add_circle_outlined} /><Icon size='xl' icon={add_circle_outlined} /> adipisci in eveniet nihil? Aliquid, tenetur.</Text>
            <Text size='xl'>This is one line with <Icon size='xs' icon={add_circle_outlined} /><Icon size='sm' icon={add_circle_outlined} /><Icon size='md' icon={add_circle_outlined} /><Icon size='lg' icon={add_circle_outlined} /><Icon size='xl' icon={add_circle_outlined} /> inline icons</Text>
            <Button><Icon icon={add_circle_outlined} />A Button</Button>
          </div>
          </Card>
            <Card {...args} className="colors-from-ds">
            <div className="eds-card__content u-rich-text">
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nisi eaque non, tenetur eos ut, vitae ipsum voluptate cum excepturi asperiores corrupti quibusdam, doloremque <strong>Multiline</strong> with inline icons <Icon size='xs' icon={add_circle_outlined} /><Icon size='sm' icon={add_circle_outlined} /><Icon size='md' icon={add_circle_outlined} /><Icon size='lg' icon={add_circle_outlined} /><Icon size='xl' icon={add_circle_outlined} /> adipisci in eveniet nihil? Aliquid, tenetur.</Text>
              <Text size='xl'>This is one line with <Icon size='xs' icon={add_circle_outlined} /><Icon size='sm' icon={add_circle_outlined} /><Icon size='md' icon={add_circle_outlined} /><Icon size='lg' icon={add_circle_outlined} /><Icon size='xl' icon={add_circle_outlined} /> inline icons</Text>
              <Button><Icon icon={add_circle_outlined} />A Button</Button>
            </div>
            </Card>
      </>
  )},
}

/* 'xs'
| 'sm'
| 'md'
| 'lg'
| 'xl'
| '2xl' */
