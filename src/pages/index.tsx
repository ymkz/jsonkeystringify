import { useState } from 'preact/hooks'
import { Input } from '../components/input'
import { Output } from '../components/output'
import { snackbar } from '../helpers/snackbar'
import { transform } from '../helpers/transform'
import layout from '../styles/pages/index.module.css'

export function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleInput = (
    event: JSX.TargetedEvent<HTMLTextAreaElement, Event>
  ) => {
    event.preventDefault()
    try {
      const { value } = event.currentTarget
      const transformed = transform(value)
      setInput(value)
      setOutput(transformed)
      snackbar.destroyAll()
    } catch (error) {
      if (!hasError) {
        setHasError(true)
        snackbar.failure('Cannot parse non JSON literal', () => {
          setHasError(false)
        })
      }
    }
  }

  const handleCopy = (
    event: JSX.TargetedEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    if (output) {
      navigator.clipboard.writeText(output)
      snackbar.success('Copy succeeded')
    }
  }

  return (
    <main className={layout.container}>
      <Input input={input} handleInput={handleInput} />
      <Output output={output} handleCopy={handleCopy} />
    </main>
  )
}
