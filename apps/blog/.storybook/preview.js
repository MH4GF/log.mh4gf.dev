import '../src/styles/tailwind.css'
import 'ui/dist/style.css'
import * as NextImage from 'next/image'
import { initialize, mswDecorator } from 'msw-storybook-addon'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#111827',
      },
    ],
  },
  chromatic: { viewports: [320, 1200] },
}

// msw
initialize()

export const decorators = [
  mswDecorator,
  (Story) => (
    <div style={{ color: 'white' }}>
      <Story />
    </div>
  ),
]
