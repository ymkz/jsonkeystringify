import style from '../styles/output.module.css'

type Props = {
  output: string
  handleCopy: (event: JSX.TargetedEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Output({ output, handleCopy }: Props) {
  return (
    <div class={style.container}>
      <textarea
        placeholder="Transform result will be displayed here"
        class={style.textarea}
        value={output}
        readOnly
      />
      <button class={style.button} onClick={handleCopy}>
        <span class={style.buttonText}>COPY</span>
      </button>
    </div>
  )
}
