import * as React from 'react'
import { Button } from 'react-daisyui'

export const CounterButton = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div className='card'>
      <p style={{ margin: '0 0 1.5rem 0' }}>
        This component is from <code>ui</code>
      </p>
      <div>
        <Button
          color='neutral'
          type='button'
          onClick={() => setCount((c) => c + 1)}
        >
          Count: {count}
        </Button>
      </div>
    </div>
  )
}
