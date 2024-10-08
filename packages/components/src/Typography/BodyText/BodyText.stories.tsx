import { BodyText, BodyTextProps } from './BodyText'
import { StoryFn, Meta } from '@storybook/react'
import { BaselineGrid } from '../../../.storybook/components/BaselineGrid'
import { Heading } from '../Heading/Heading'

const TEXT = 'The quick brown fox jumps over the lazy dog'

const meta: Meta<typeof BodyText> = {
  title: 'Typography/BodyText',
  component: BodyText,
  args: {
    size: 'lg',
    children: TEXT,
  },
  argTypes: {
    as: {
      options: ['p', 'span', 'div'],
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

export const Introduction: StoryFn<BodyTextProps> = (args) => {
  return <BodyText {...args} />
}

export const Demo: StoryFn<BodyTextProps> = () => {
  return (
    <>
      <Heading size="4xl" as="h3">
        A heading
      </Heading>
      <BodyText>
        <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </BodyText>
      <BodyText as="a" href="#q">
        As a link
      </BodyText>
      <BodyText>
        Duis aute irure dolor in <a href="#t">an inline link</a> reprehenderit
        in voluptate velit esse cillum dolore eu fugiat. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </BodyText>
      <Heading as="h4" size="3xl">
        A smaller heading
      </Heading>
      <BodyText>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </BodyText>
    </>
  )
}

export const Sizes: StoryFn<BodyTextProps> = () => {
  return (
    <>
      <BodyText size="xs">xs: {TEXT}</BodyText>
      <BodyText size="sm">sm: {TEXT}</BodyText>
      <BodyText size="md">md: {TEXT}</BodyText>
      <BodyText size="lg">lg: {TEXT}</BodyText>
      <BodyText size="xl">xl: {TEXT}</BodyText>
      <BodyText size="2xl">2xl: {TEXT}</BodyText>
      <BodyText size="3xl">3xl: {TEXT}</BodyText>
      <BodyText size="4xl">4xl: {TEXT}</BodyText>
      <BodyText size="5xl">5xl: {TEXT}</BodyText>
      <BodyText size="6xl">6xl: {TEXT}</BodyText>
    </>
  )
}
export const Trunkated: StoryFn<BodyTextProps> = () => {
  return (
    <BodyText lines={2}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sit, non
      velit corrupti ad sint excepturi expedita odit recusandae rerum cumque
      repudiandae tempora a fuga nulla. Tempore minima eligendi officiis. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Iure, sit, non velit
      corrupti ad sint excepturi expedita odit recusandae rerum cumque
      repudiandae tempora a fuga nulla. Tempore minima eligendi officiis.
    </BodyText>
  )
}
