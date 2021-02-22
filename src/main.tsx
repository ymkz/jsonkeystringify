import '@snackbar/core/dist/snackbar.min.css'
import { render } from 'preact'
import { App } from './pages'
import './styles/global.css'

render(<App />, document.querySelector('#root')!)
