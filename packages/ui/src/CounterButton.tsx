import * as React from 'react'
import { Button, Card } from 'react-daisyui'

export const CounterButton = () => {
  const [count, setCount] = React.useState(0)
  return (
    <Card imageFull className='border-0'>
      <Card.Body className='space-y-2'>
        <p>
          This component is from{' '}
          <code className='kbd text-base-content'>ui</code> package
        </p>
        <Card.Actions className='justify-center'>
          <div className='flex flex-row h-full border border-neutral-content/20 justify-center items-center bg-base-100 px-4 rounded-btn text-base-content'>
            <div>
              Current count is{' '}
              <span className='font-bold text-primary'>{count}</span>
            </div>
          </div>
          <Button
            color='primary'
            type='button'
            onClick={() => setCount((c) => c + 1)}
          >
            Increment!
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  )
}
