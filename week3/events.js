const EventEmmiter = require('events');

const event = new EventEmmiter();

event.on((name) => {
    console.log(" hello", name);
});

event.emit("lakshmi");

    