const { setTimeout, setInterval, setImmediate } = require('timers');

console.log('Starting timers');

setTimeout(() => {
    console.log('this runs after 1 second');

}, 1000);

let counter = 0;

const interval = setInterval(() => {
    counter++;
    console.log(`Interval tick ${counter}`);

    if (counter >= 10) clearInterval(interval);

}, 1000);


setImmediate(() => {
    console.log('This is runs int the next iteration of the event loop');

});

console.log('Timers scheduled');
