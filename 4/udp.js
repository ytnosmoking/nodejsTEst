let dgram = require('dgram')
let server = dgram.createSocket('udp4')

// socket 监听 listening 事件
server.on('listening',() => {
  let address = server.address()
  console.log('server listening' + address.address+":" +address.port)
})
server.bind(41234)