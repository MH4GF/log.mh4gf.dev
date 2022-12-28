---
name: 'component'
root: '.'
output: 'packages/ui/lib/components'
ignore: []
questions:
  componentName: 'コンポーネント名を入力してください'
---

# `{{ inputs.componentName }}/{{ inputs.componentName }}.tsx`

```typescript
import type { FC } from 'react'

type Props = {}

export const {{ inputs.componentName }}: FC<Props> = () => {
  return <div>{{ inputs.componentName }}</div>
}

```

# `{{ inputs.componentName }}/{{ inputs.componentName }}.stories.tsx`

```typescript
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { {{ inputs.componentName }} } from './{{ inputs.componentName }}'

const meta: ComponentMeta<typeof {{ inputs.componentName }}> = {
  component: {{ inputs.componentName }},
}

export default meta

type Story = ComponentStoryObj<typeof {{ inputs.componentName }}>

export const Default: Story = {}

```

# `{{ inputs.componentName }}/index.ts`

```typescript
export { {{ inputs.componentName }} } from './{{ inputs.componentName }}'

```
