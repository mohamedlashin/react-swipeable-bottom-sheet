'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var HeightUpdater = (function (_Component) {
	_inherits(HeightUpdater, _Component);

	function HeightUpdater(props) {
		_classCallCheck(this, HeightUpdater);

		_get(Object.getPrototypeOf(HeightUpdater.prototype), 'constructor', this).call(this, props);

		this.onWindowResize = this.onWindowResize.bind(this);
	}

	_createClass(HeightUpdater, [{
		key: 'onWindowResize',
		value: function onWindowResize() {
			var height = typeof window !== 'undefined'? window.innerHeight: 0;
			if (height !== this.props.height) {
				this.props.onHeightChange(height);
			}
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			typeof window !== 'undefined'? window.addEventListener('resize', this.onWindowResize): null;
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			typeof window !== 'undefined'? window.removeEventListener('resize', this.onWindowResize): null;
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return HeightUpdater;
})(_react.Component);

HeightUpdater.propTypes = {
	height: _propTypes2['default'].number,
	onHeightChange: _propTypes2['default'].func
};

exports['default'] = HeightUpdater;
module.exports = exports['default'];
