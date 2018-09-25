"use strict";

var snipStack = function snipStack(e) {
  if (e.stack) e.stack = e.stack.split('\n').reduceRight(function (acc, x) {
    return (
      /* eslint-disable-next-line */
      acc.done ? acc.cur : x.match(/at Object\.test.*\/src\/gunner\.js/) ? {
        cur: x,
        done: true
      } : {
        cur: [x, acc.cur].join('\n')
      }
    );
  }, {
    cur: ''
  }).cur.trim();
  return e;
};

module.exports = snipStack;