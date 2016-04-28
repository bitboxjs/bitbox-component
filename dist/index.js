(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('bitbox'), require('bitbox/elements')) :
	typeof define === 'function' && define.amd ? define(['exports', 'bitbox', 'bitbox/elements'], factory) :
	(factory((global.bitbox_component = global.bitbox_component || {}),global.bitbox,global.bitbox.elements));
}(this, function (exports,bitbox,bitbox_elements) { 'use strict';

	bitbox = 'default' in bitbox ? bitbox['default'] : bitbox;

	function demo(_ref) {
		var state = _ref.state;
		var signals = _ref.signals;


		var onInput = function onInput(e) {
			return signals.message({
				value: e.target.value
			});
		};

		return bitbox_elements.div({
			padding: 16,
			margin: 8,
			bg: ['grey', 100],
			font: [18, 'Menlo']
		}, function ($tree) {

			$tree.push(bitbox_elements.h1({
				color: ['teal', 500]
			}, state.message));
			$tree.push(bitbox_elements.input({
				padding: 8,
				value: state.message,
				border: [2, 'solid', null],
				outline: 0,
				on: {
					input: onInput
				}
			}));
			return $tree;
		}([]));
	}

	var component = bitbox.component(demo);

	function index () {
		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];


		if ('module' in options) return component.apply(undefined, arguments);

		return function (mod, app) {

			mod.addState({
				message: options.message || 'Hello World'
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
	}

	exports.component = component;
	exports['default'] = index;

}));