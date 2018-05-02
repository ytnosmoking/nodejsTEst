let io = require('socket.io').listen(80)
/*定义 socket 连接时执行的回掉函数 */
io.sockets.on('connection', socket => {
  socket.emit('news', { hello: 'world'});
  socket.on('my other event', data => {
    console.log(data)
  })
})