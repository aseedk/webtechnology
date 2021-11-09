const event = require('events');
let myEvents = new event();
myEvents.on('start',()=>{
    console.log("On function ran")
})

myEvents.once('onetime',()=>{
    console.log("Onetime function ran")
})
myEvents.emit('start')
myEvents.emit('start')
myEvents.emit('onetime')
myEvents.emit('onetime')

