let dgram = require('dgram')


// 创建udp socket 对象
let client = dgram.createSocket('udp4')

// 创建发送数据 messge
let message = new Buffer('hi 123, nodejs is waiting for U')


// 发送数据到 本地 41234 端口
client.send(message, 0, message.length, 41234, "127.0.0.1")
client.close()