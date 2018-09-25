"use strict";

var _require = require('os'),
    EOL = _require.EOL;

module.exports = {
  EOL: EOL,
  eventMap: {
    'ok': 'pass',
    'notOk': 'fail',
    'skip': 'skip'
  },
  eventVerbs: {
    pass: ['pass', 'passing', 'passed'],
    fail: ['fail', 'failing', 'failed'],
    skip: ['skip', 'skipping', 'skipped']
  }
};