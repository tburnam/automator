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

var Cpu = function Cpu(props) {
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
    _react2.default.createElement('rect', { x: '4', y: '4', width: '16', height: '16', rx: '2', ry: '2' }),
    _react2.default.createElement('rect', { x: '9', y: '9', width: '6', height: '6' }),
    _react2.default.createElement('line', { x1: '9', y1: '1', x2: '9', y2: '4' }),
    _react2.default.createElement('line', { x1: '15', y1: '1', x2: '15', y2: '4' }),
    _react2.default.createElement('line', { x1: '9', y1: '20', x2: '9', y2: '23' }),
    _react2.default.createElement('line', { x1: '15', y1: '20', x2: '15', y2: '23' }),
    _react2.default.createElement('line', { x1: '20', y1: '9', x2: '23', y2: '9' }),
    _react2.default.createElement('line', { x1: '20', y1: '14', x2: '23', y2: '14' }),
    _react2.default.createElement('line', { x1: '1', y1: '9', x2: '4', y2: '9' }),
    _react2.default.createElement('line', { x1: '1', y1: '14', x2: '4', y2: '14' })
  );
};

Cpu.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Cpu.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Cpu;