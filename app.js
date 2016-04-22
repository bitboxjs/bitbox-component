import bitbox from 'bitbox'
import component from 'component'

const app = bitbox.app({})

app.addModules({
	demo: component()
})

export default app;
