/* encode_module.js */
let AdapterClass = require('./adapter');
exports.encode = function () {
  let encodeModule = arguments[0] ? arguments[0] : null, // 模块名
    algorithm = arguments[1] ? arguments[1] : null, // 算法类型
    enstring = arguments[2] ? arguments[2] : "", // 需要加密的字符串或者字符的二进制数据流
    returnType = arguments[3] ? arguments[3] : "", //输出返回类型
    encodeKey = arguments[4] ? arguments[4] : "", //加密使用的私钥  可选
    encodeType = arguments[5] ? arguments[5] : ""; // 加密时需要的加密编码， 可以为 binary ascii

  let Adapter = new AdapterClass()
  return Adapter.encode(encodeModule, algorithm, enstring, returnType, encodeKey, encodeType)

}


exports.decode = function () {
  let encodeModule = arguments[0] ? arguments[0] : null,
    algorithm = arguments[1] ? arguments[1] : null,
    enstring = arguments[2] ? arguments[2] : "",
    returnType = arguments[3] ? arguments[3] : "",
    encodeKey = arguments[4] ? arguments[4] : "",
    encodeType = arguments[5] ? arguments[5] : "";
    
    var Adapter = new AdapterClass()
    return Adapter.decode(encodeModule, algorithm, enstring, returnType, encodeKey, encodeType)
}