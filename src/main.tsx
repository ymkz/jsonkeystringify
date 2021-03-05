import '@snackbar/core/dist/snackbar.min.css'
import { render } from 'preact'
import { setFillHeight } from './helpers/fix-height'
import { App } from './pages'
import './styles/global.css'

window.addEventListener('resize', setFillHeight)

setFillHeight()

render(<App />, document.querySelector('#root')!)
