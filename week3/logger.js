const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message){
        this.emit('messageLogged', {message, timestamp: new Date().toISOString()});
    }
}

module.exports = Logger;