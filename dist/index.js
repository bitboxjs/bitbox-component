(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.demoModule = factory());
}(this, function () { 'use strict';

	var index = (function () {
		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		return function (mod) {

			mod.addState({
				message: 'Hello World'
			});

			mod.addSignals({
				message: [function action(_ref) {
					var state = _ref.state;
					var input = _ref.input;

					state.select(mod.path).set('message', input.value);
				}]
			});

			return {
				title: 'Demo Component'
			};
		};
	})

	return index;

}));