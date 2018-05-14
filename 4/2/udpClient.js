module.exports = function () {
  let _res = arguments[0],
    _req = arguments[1]

  /**
   * 响应 http文件上传页面
   */
  this. uploadPage = function() {
    _res.render(VIEW+ 'index.jade')
  }
  /**
   * @desc 文件上传处理逻辑
   */
  this.uploadAction = function () {

  }
  /**
   * @desc 图片压缩处理函数
   * @param width 
   * @param height 
   * @param imagePath
   * @param newName 
   */
  function imageResize(width, height, imagePath, newName) {
    let imageJson = {
      'width': width,
      'height':height,
      'url': imagePath,
      'new_name': newName
    }
    let jsonStr = JSON.stringify(imageJson)
    let client = lib.dgram.createSocket('udp4')

  }
}