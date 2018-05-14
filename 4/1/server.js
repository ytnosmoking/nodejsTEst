

// dgram createSocket.js
let dgram = require('dgram')
let server = dgram.createSocket('udp4')

server.on('message', (msg, rinfo) => {
  console.log('server get: '+ msg +" from " + rinfo.address+":"+rinfo.port)
})

server.on('listening', ()=>{
  let address = server.address()
  console.log(address)
  console.log('server address listening:'+address.address+":"+address.port)
})

server.bind(41234)