import bitbox from 'bitbox'
import component from 'bitbox-component'

const app = bitbox.app({})

app.addModules({
	demo: component()
})

export default app;
