"use strict";

var statusMap = {
  'ok': ['ok', '✅'],
  'notOk': ['notOk', '❌'],
  'skip': ['skip', '⚠️']
};

var convert = function convert(x) {
  return x;
};

var Default = function Default(runner, options) {
  runner.on('start', function () {
    return console.log('Started tests');
  });
  runner.on('test end', function (results) {
    results.forEach(function (x) {
      var s = statusMap[x.status];
      console.log('>', s[0], s[1], x.description);
      options.trace && x.reason && console.log('\n---\n\n', x.reason, '\n\n---\n');
    });
  });
  runner.on('end', function (results) {
    console.log(results.success.length, 'tests of', results.length, 'passed');
    console.log('Success ratio:', results.successPercent, '%');
  });
};

module.exports = Default;
module.exports.convert = convert;