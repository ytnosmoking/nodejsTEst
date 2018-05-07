var socket = io.connect('http://127.0.0.1:1337')
  // 监听 change_from_server消息
  socket.on('change_from_server', function(data) {
    $('textarea').val(data.msg+1)
    console.log('change from server')
  })
  $(function() {
    $('textarea').on('keyup', function() {
      console.log($('textarea').val())
      socket.emit("data", { msg: $('textarea').val()})
      
    })
    
  })