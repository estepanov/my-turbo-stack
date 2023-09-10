import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { NameForm } from '../NameForm'

describe('NameForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<NameForm />)
    expect(root).toBeTruthy()
    root.unmount()
  })
})
