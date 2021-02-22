import JSX = preact.JSX

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
