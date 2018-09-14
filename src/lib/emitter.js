const EventEmitter = require('events');

class GunnerEmitter extends EventEmitter {}

module.exports = new GunnerEmitter();
