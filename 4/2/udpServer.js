let dgram = require('dgram')
let server = dgram.createSocket('udp4')



server.on('message', (msg, rinfo) => {
  // resizeImage()
  let imageObj = JSON.parse(msg)
  resizeImage(imageObj.url, imageObj.width, imageObj.height,imageObj.newName, (ret) => {
    //  匿名函数回掉
    let retJson;
    if(ret == -1) {
      //压缩图片错误时， 返回错误信息
      retJson = {
        "code": -1,
        "msg": 'some error in resize image',
        "data":  {}
      }
    }else {
      // 压缩成功 返回成功信息
      retJson = {
        "code": 0,
        "msg": "success",
        "data": {
          'name':imageObj.newName
        }
      }
    }
    let retStr = JSON.stringify(retJson);
    let message = new Buffer(rertStr);
    // 回复字符数据到发送数据的客户端
    server.send(message, 0, message.length, rinfo.port, rinfo.address)
  })
})

server.on('listening', () => {
  let address = server.address()
  console.log('server listening' + address.address + ":" +address.port)
})

server.bind(41234)

function resizeImage(url, width, height, newName, callback) {
  let im = require('imagemagick')
  im.resize({
    srcPath: url,
    dstPath: newName,
    width: width,
    height: height
  }, (err, stdout, stderr) => {
    if(err) {
      callback(-1)
    }else {
      console.log(stdout)
      callback(stdout)
    }
  })
}