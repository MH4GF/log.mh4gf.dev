import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { RichText } from '.'

import { richTextFactory } from '~/src/test/factories/blocks/richTextFactory'

export default {
  component: RichText,
} as ComponentMeta<typeof RichText>

export const Default: ComponentStory<typeof RichText> = () => (
  <div className="grid gap-4">
    <div>
      <p className="text-gray-300">default</p>
      <RichText richText={richTextFactory.build()} />
    </div>
    <div>
      <p className="text-gray-300">bold</p>
      <RichText richText={richTextFactory.build({ annotations: { bold: true } })} />
    </div>
    <div>
      <p className="text-gray-300">italic</p>
      <RichText richText={richTextFactory.build({ annotations: { italic: true } })} />
    </div>
    <div>
      <p className="text-gray-300">strikethrough</p>
      <RichText richText={richTextFactory.build({ annotations: { strikethrough: true } })} />
    </div>
    <div>
      <p className="text-gray-300">underline</p>
      <RichText richText={richTextFactory.build({ annotations: { underline: true } })} />
    </div>
    <div>
      <p className="text-gray-300">code</p>
      <RichText richText={richTextFactory.build({ annotations: { code: true } })} />
    </div>
    <div>
      <p className="text-gray-300">colors</p>
      <RichText
        richText={richTextFactory.build({
          text: { content: 'https://example.com/', link: { url: 'https://example.com/' } },
          plain_text: 'https://example.com/',
        })}
      />
    </div>
    <div>
      <p className="text-gray-300">page mention</p>
      <RichText
        richText={richTextFactory.transient({ type: 'mention', mentionType: 'page' }).build()}
      />
    </div>
    <div>
      <p className="text-gray-300">database mention</p>
      <RichText
        richText={richTextFactory.transient({ type: 'mention', mentionType: 'database' }).build()}
      />
    </div>
    <div>
      <p className="text-gray-300">text with link</p>
      <RichText
        richText={richTextFactory.build({
          text: { content: 'https://example.com/', link: { url: 'https://example.com/' } },
          plain_text: 'https://example.com/',
        })}
      />
    </div>
  </div>
)

const Template: ComponentStory<typeof RichText> = (args) => <RichText {...args} />

export const Configuable = Template.bind({})
Configuable.args = {
  richText: richTextFactory.build(),
}
