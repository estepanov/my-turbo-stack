import type { Meta, StoryObj } from '@storybook/react'

import { NameForm } from '@myturbostack/forms'

const meta: Meta<typeof NameForm> = { component: NameForm }
export default meta

type Story = StoryObj<typeof NameForm>

export const Primary: Story = { args: {} }
