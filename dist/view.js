(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('bitbox'), require('bitbox/elements')) :
	typeof define === 'function' && define.amd ? define(['bitbox', 'bitbox/elements'], factory) :
	(global.demoView = factory(global.bitbox,global.bitbox_elements));
}(this, function (bitbox,bitbox_elements) { 'use strict';

	bitbox = 'default' in bitbox ? bitbox['default'] : bitbox;

	var view = bitbox(function (_ref) {
		var state = _ref.state;
		var signals = _ref.signals;


		var onInput = function onInput(e) {
			return signals.message({
				value: e.target.value
			});
		};

		return bitbox_elements.div({}, function ($tree) {
			$tree.push(bitbox_elements.h1({
				color: [null, 500]
			}, state.message));
			$tree.push(bitbox_elements.input({
				value: state.message,
				on: {
					input: onInput
				}
			}));
			return $tree;
		}([]));
	});

	return view;

}));