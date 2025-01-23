import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import {Icon} from '../'
import {add, expand, close } from '@equinor/eds-icons'
import { CircularProgress, DotProgress } from '@equinor/eds-core-react'
import { CSSProperties } from 'styled-components'

const meta = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{display: 'flex', gap: '8px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
        <Button {...args}><Icon icon={add} />{`Text with \n two lines`}</Button>
        <Button {...args}><Icon icon={add} /></Button>
        <Button {...args} data-icon><Icon icon={add} /></Button>
        <Button {...args}>Only Text</Button>
        <Button><CircularProgress color='neutral' size={16} style={{fontSize: '16px'}} /></Button>
        <Button><DotProgress color='neutral' style={{fontSize: '8px'} as CSSProperties} size={32} /></Button>
        <Button><Icon icon={add} />Both sides<Icon icon={close} /></Button>
        <Button variant="secondary">Secondary<Icon icon={expand} /></Button>
        <Button variant="tertiary">Tertiary<Icon icon={add} /><Icon icon={close} /></Button>
      </div>
  )},
}
