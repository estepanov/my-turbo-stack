import { useForm } from '@tanstack/react-form'
import type { FieldApi } from '@tanstack/react-form'

export function NameFieldInfo({ field }: { field: FieldApi<any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em>{field.state.meta.touchedErrors}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

export interface NameFormValues {
  firstName: string
  lastName: string
}

export const defaultValues: NameFormValues = {
  firstName: '',
  lastName: '',
}

export type NameFormCallback = (values: NameFormValues) => void

const defaultOnSubmit: NameFormCallback = (values) => {
  console.log(values)
}

export interface NameFormProps {
  onSubmit?: NameFormCallback
}

export const NameForm = ({ onSubmit = defaultOnSubmit }: NameFormProps) => {
  const form = useForm({
    // Memoize your default values to prevent re-renders
    defaultValues,
    onSubmit,
  })

  return (
    <div>
      <h1>Simple Form Example</h1>
      {/* A pre-bound form component */}
      <form.Provider>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            void form.handleSubmit()
          }}
        >
          <div>
            {/* A type-safe and pre-bound field component*/}
            <form.Field
              name='firstName'
              onChange={(value) =>
                !value
                  ? 'A first name is required'
                  : value.length < 3
                  ? 'First name must be at least 3 characters'
                  : undefined
              }
              onChangeAsyncDebounceMs={500}
              onChangeAsync={async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return (
                  value.includes('error') && 'No "error" allowed in first name'
                )
              }}
              // eslint-disable-next-line react/no-children-prop
              children={(field) => {
                // Avoid hasty abstractions. Render props are great!
                return (
                  <>
                    <label htmlFor={field.name}>First Name:</label>
                    <input
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    <NameFieldInfo field={field} />
                  </>
                )
              }}
            />
          </div>
          <div>
            <form.Field
              name='lastName'
              // eslint-disable-next-line react/no-children-prop
              children={(field) => (
                <>
                  <label htmlFor={field.name}>Last Name:</label>
                  <input
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <NameFieldInfo field={field} />
                </>
              )}
            />
          </div>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            // eslint-disable-next-line react/no-children-prop
            children={([canSubmit, isSubmitting]) => (
              <button type='submit' disabled={!canSubmit}>
                {isSubmitting ? '...' : 'Submit'}
              </button>
            )}
          />
        </form>
      </form.Provider>
    </div>
  )
}
