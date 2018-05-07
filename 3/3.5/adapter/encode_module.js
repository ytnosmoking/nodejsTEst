/* encode_module.js */
let AdapterClass = require('./adapter');
exports.encode = function () {
  let encodeModule = arguments[0] ? arguments[0] : null,
    algorithm = arguments[1] ? arguments[1] : null,
    enstring = arguments[2] ? arguments[2] : null,
    returnType = arguments[3] ? arguments[3] : null,
    encodeKey = arguments[4] ? arguments[4] : null,
    encodeType = arguments[5] ? arguments[5] : null;

  let Adapter = new AdapterClass()
  return Adapter.encode(encodeModule, algorithm, enstring, returnType, encodeKey, encodeType)

}


exports.decode = function () {
  let encodeModule = arguments[0] ? arguments[0] : null,
    algorithm = arguments[1] ? arguments[1] : null,
    enstring = arguments[2] ? arguments[2] : null,
    returnType = arguments[3] ? arguments[3] : null,
    encodeKey = arguments[4] ? arguments[4] : null,
    encodeType = arguments[5] ? arguments[5] : null;
    
    var Adapter = new AdapterClass()
    return Adapter.decode(encodeModule, algorithm, enstring, returnType, encodeKey, encodeType)
}