import { getAbsolutePath } from './resolvePaths.ts'
import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.@(mdx|stories.@(ts|tsx))',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@chromatic-com/storybook'),
    /* Not for storybook v9 yet
    getAbsolutePath('@storybook/addon-interactions'),*/
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
}
export default config