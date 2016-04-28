(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('bitbox'), require('bitbox/elements')) :
	typeof define === 'function' && define.amd ? define(['bitbox', 'bitbox/elements'], factory) :
	(global.demoView = factory(global.bitbox,global.bitbox_elements));
}(this, function (bitbox,bitbox_elements) { 'use strict';

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

	return demo;

}));