import bitbox from 'bitbox'
import demo from 'bitbox-component'
import index from './index.box'

const app = bitbox.app({})

app.addModules({
	demo: demo()
})

app.render(index, document.body)

/** hot reload hook */
export const __reload = app.reload
