'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Loader = function Loader(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }, otherProps),
    _react2.default.createElement('line', { x1: '12', y1: '2', x2: '12', y2: '6' }),
    _react2.default.createElement('line', { x1: '12', y1: '18', x2: '12', y2: '22' }),
    _react2.default.createElement('line', { x1: '4.93', y1: '4.93', x2: '7.76', y2: '7.76' }),
    _react2.default.createElement('line', { x1: '16.24', y1: '16.24', x2: '19.07', y2: '19.07' }),
    _react2.default.createElement('line', { x1: '2', y1: '12', x2: '6', y2: '12' }),
    _react2.default.createElement('line', { x1: '18', y1: '12', x2: '22', y2: '12' }),
    _react2.default.createElement('line', { x1: '4.93', y1: '19.07', x2: '7.76', y2: '16.24' }),
    _react2.default.createElement('line', { x1: '16.24', y1: '7.76', x2: '19.07', y2: '4.93' })
  );
};

Loader.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Loader.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Loader;