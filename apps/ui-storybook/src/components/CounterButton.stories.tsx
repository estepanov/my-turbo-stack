import '@myturbostack/ui/index.css'

import type { Meta, StoryObj } from '@storybook/react'

import { CounterButton } from '@myturbostack/ui'

const meta: Meta<typeof CounterButton> = { component: CounterButton }
export default meta

type Story = StoryObj<typeof CounterButton>

export const Primary: Story = { args: {} }
