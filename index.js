import bitbox from 'bitbox'
import app from './app.js'
import box from './app.box'

/** hot reload hook */
export const __reload = app.reload

app.run(box, document.body)
