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

var Aperture = function Aperture(props) {
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
    _react2.default.createElement('circle', { cx: '12', cy: '12', r: '10' }),
    _react2.default.createElement('line', { x1: '14.31', y1: '8', x2: '20.05', y2: '17.94' }),
    _react2.default.createElement('line', { x1: '9.69', y1: '8', x2: '21.17', y2: '8' }),
    _react2.default.createElement('line', { x1: '7.38', y1: '12', x2: '13.12', y2: '2.06' }),
    _react2.default.createElement('line', { x1: '9.69', y1: '16', x2: '3.95', y2: '6.06' }),
    _react2.default.createElement('line', { x1: '14.31', y1: '16', x2: '2.83', y2: '16' }),
    _react2.default.createElement('line', { x1: '16.62', y1: '12', x2: '10.88', y2: '21.94' })
  );
};

Aperture.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Aperture.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Aperture;