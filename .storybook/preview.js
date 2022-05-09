import '../src/styles/tailwind.css'
import * as NextImage from 'next/image'

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
      {
        name: 'light',
        value: '#ffffff',
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <div className="text-white">
      <Story />
    </div>
  ),
]
