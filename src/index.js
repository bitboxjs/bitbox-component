import bitbox from 'bitbox'
import view from './view.box'

export const component = bitbox.component(view)

export default function(options = {}) {

	if ('module' in options)
		return component(...arguments)

	return (mod, app) => {

		mod.addState({
			message: options.message || 'Hello World'
		})

		mod.addSignals({
			message: [
				function action({ state, input }) {
					state.select(mod.path).set('message', input.value)
				}
			]
		})

		return {
			title: 'Demo Component'
		}
	}
}
