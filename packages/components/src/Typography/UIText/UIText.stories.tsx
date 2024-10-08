import { UIText, UITextProps } from './UIText'
import { StoryFn, Meta } from '@storybook/react'
import { BaselineGrid } from '../../../.storybook/components/BaselineGrid'

const TEXT = 'The quick brown fox jumps over the lazy dog'

const meta: Meta<typeof UIText> = {
  title: 'Typography/UIText (Beta)',
  component: UIText,
  args: {
    size: 'lg',
    children: TEXT,
  },
  argTypes: {
    as: {
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
    color: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'maximal',
        'disabled',
        'inverted',
      ],
      control: {
        type: 'select',
      },
    },
    size: {
      table: {
        type: {
          summary: 'TypographySize',
        },
      },
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
      ],

      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <BaselineGrid>
          <Story />
        </BaselineGrid>
      )
    },
  ],
}

export default meta

export const Introduction: StoryFn<UITextProps> = (args) => {
  return <UIText {...args} />
}

export const Demo: StoryFn<UITextProps> = () => {
  return (
    <>
      <UIText size="lg">lg</UIText>
      <UIText size="xs">xs</UIText>
      <UIText>{TEXT}</UIText>
    </>
  )
}

export const Sizes: StoryFn<UITextProps> = () => {
  return (
    <>
      <UIText size="xs">xs: {TEXT}</UIText>
      <UIText size="sm">sm: {TEXT}</UIText>
      <UIText size="md">md: {TEXT}</UIText>
      <UIText size="lg">lg: {TEXT}</UIText>
      <UIText size="xl">xl: {TEXT}</UIText>
      <UIText size="2xl">2xl: {TEXT}</UIText>
      <UIText size="3xl">3xl: {TEXT}</UIText>
      <UIText size="4xl">4xl: {TEXT}</UIText>
      <UIText size="5xl">5xl: {TEXT}</UIText>
      <UIText size="6xl">6xl: {TEXT}</UIText>
    </>
  )
}
