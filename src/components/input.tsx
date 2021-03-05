import style from '../styles/components/input.module.css'

type Props = {
  input: string
  handleInput: (event: JSX.TargetedEvent<HTMLTextAreaElement, Event>) => void
}

export function Input({ input, handleInput }: Props) {
  return (
    <div class={style.container}>
      <textarea
        placeholder="Paste dependencies json here"
        class={style.textarea}
        value={input}
        onInput={handleInput}
      />
    </div>
  )
}
