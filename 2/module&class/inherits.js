let util = require('util')
let events = require('events')


function MyStream () {
  events.EventEmitter.call(this)
}

util.inherits(MyStream,events.EventEmitter)

MyStream.prototype.write = function(data) {
  this.emit('data', data);
}

let stream = new MyStream()

console.log(stream instanceof events.EventEmitter)
console.log(MyStream.super_ ===events.EventEmitter)

stream.on('data', data => {
  console.log(`Received data: ${data}`)
})

stream.write('it works!')