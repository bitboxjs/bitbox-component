export default (options = {}) => {
	return (mod) => {

		mod.addState({
			message: 'Hello World'
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
