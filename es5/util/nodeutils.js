"use strict";

module.exports = {
  clear: function clear() {
    if (typeof global === 'undefined' || typeof global.process === 'undefined' || typeof global.process.stdout === 'undefined') return;
    var process = global.process; // clear screen

    process.stdout.write("\x1B[2J"); // set cursor position to top

    process.stdout.write("\x1B[1;1H");
  }
};