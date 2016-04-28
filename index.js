import bitbox from 'bitbox'
import demo from 'bitbox-component'

export default bitbox.app()

bitbox.modules({
	demo: demo({
		message: 'wazzup?'
	})
})

bitbox(app => demo({
	module: 'demo'
}))

/** hot reload hook */
export const __reload = (m) => bitbox.set(m.default.get())
