// Generated by uRequire v0.6.13-01 - template: 'nodejs' 
(function (window, global) {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;

var Linear = require('./linear'),
    O = require('./ops'),
    Sector = require('./sector');

module.exports = (function () {
  return function (_arg) {
    var R, accessor, center, compute, curves, data, i, item, r, s, scale, t, value, values, _i, _len;
    data = _arg.data, accessor = _arg.accessor, center = _arg.center, r = _arg.r, R = _arg.R, compute = _arg.compute;
    values = function () {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        item = data[_i];
        _results.push(accessor(item));
      }
      return _results;
    }();
    s = O.sum(values);
    scale = Linear([
      0,
      s
    ], [
      0,
      2 * Math.PI
    ]);
    curves = [];
    t = 0;
    for (i = _i = 0, _len = data.length; _i < _len; i = ++_i) {
      item = data[i];
      value = values[i];
      curves.push(O.enhance(compute, {
        item: item,
        index: i,
        sector: Sector({
          center: center,
          r: r,
          R: R,
          start: scale(t),
          end: scale(t + value)
        })
      }));
      t += value;
    }
    return { curves: curves };
  };
}).call(this);


}).call(this, (typeof exports === 'object' ? global : window), (typeof exports === 'object' ? global : window))