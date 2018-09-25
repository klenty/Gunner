"use strict";

var statusMap = {
  'ok': 'ok',
  'notOk': 'not ok',
  'skip': 'skip'
};

var convert = function convert(results, options) {
  return "\nTAP version 13\n".concat(results.length ? '1' : 0, "..").concat(results.length, "\n").concat(results.map(function (r, i) {
    var status = statusMap[r.status];
    var message = options.trace && r.reason && (r.reason.stack ? r.reason.stack : r.reason) || '';
    return "".concat(status, " ").concat(i + 1, " - ").concat(r.description) + (message && '\n  ---\n  message: |\n    ' + message + '\n  ---\n');
  }).join('\n'), "\n");
};

var TAP = function TAP(runner, options) {
  runner.on('end', function (results) {
    return console.log(convert(results, options));
  });
};

module.exports = TAP;
module.exports.convert = convert;