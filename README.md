# Design System CSS
[![Build status](https://api.radix.equinor.com/api/v1/applications/eds-storybook-design-tokens/environments/dev/buildstatus)](https://web-eds-storybook-design-tokens-dev.radix.equinor.com)
[![Promote status](https://api.radix.equinor.com/api/v1/applications/eds-storybook-design-tokens/environments/prod/buildstatus?pipeline=promote)](https://eds-storybook-design-tokens.app.radix.equinor.com)

A CSS first approach to solving EDS colour tokens. In order to reduce the total number of tokens needed, we make use of modern CSS features to manipulate colours and then replicate that in Figma and in JSON. The end result may also end up as the foundation of an EDS CSS library.

## Deployment

- https://web-eds-storybook-design-tokens-dev.radix.equinor.com
  - Unstable, deployed on every push to Github
- https://eds-storybook-design-tokens.app.radix.equinor.com
  - Stable public url – promoted manually from dev

## Promotion

Promote dev to prod when dev is stable

```sh
$ rx login --use-device-code
$ rx create pipeline-job promote --application eds-storybook-design-tokens --from-environment dev --to-environment prod --use-active-deployment
```
If you don’t use Codespaces, take a look at the Radix CLI [install script](https://github.com/equinor/design-system-css/blob/main/.devcontainer/radix.sh) to see how to install it on your own machine.

## Spacing & Typography

- [Documentation in Figma](https://www.figma.com/design/ZSh11jqMpemjSCHaENayna/%F0%9F%93%98-EDS-2.0-Spacing-%26-Typography-Documentation?node-id=1-1273&node-type=canvas&t=5OAjnA6LVLx5sYvG-11)

