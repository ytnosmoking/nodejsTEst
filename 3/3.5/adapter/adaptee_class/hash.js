let crypto = require('crypto')



module.exports = function () {
  this.encode = function () {
    let algorithm = arguments[0] ? arguments[0] : null,
      enstring = arguments[1] ? arguments[1] : "",
      returnType = arguments[2] ? arguments[2] : "";
    let hash = crypto.createHash(algorithm);
    hash.update(enstring)
    return hash.digest(returnType)
  }
  this.decode = function () {
    console.log('it has not decode function')
  }
}
// 使用md5进行加密
let hash = crypto.createHash('md5')  //得到哈希实例 提供算法 MD5 sha1 sha256 sha512 ripemd160
hash.update(new Buffer('1234', 'binary')) // 加密字符串  使用二进制
let encode = hash.digest('hex')   // 返回加密后的字符串 hex binary base64
console.log(encode)

// 使用hash.digest 后hash 对象将不能再使用  如果希望一个字符串使用两种方式加密 碧玺重建hash对象