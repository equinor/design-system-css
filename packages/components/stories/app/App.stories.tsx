import { App } from './App';
import type { Meta } from '@storybook/react'

const meta = {
  title: 'Example/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>

export default meta

export const app = {}
