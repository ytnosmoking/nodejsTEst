/**
 * @desc adapter.js
 */


let util = require('util')
let Target = require('./target')


let Adaptee = require('./adaptee')

/**
 * @desc 定义Adapter 函数
 */

function Adapter() {
  Target.call(this)
  this.encode = function () {
    let encodeModule = arguments[0] ? arguments[0] : null,
      algorithm = arguments[1] ? arguments[1] : null,
      enstring = arguments[2] ? arguments[2] : null,
      returnType = arguments[3] ? arguments[3] : null,
      encodeKey = arguments[4] ? arguments[4] : null,
      encodeType = arguments[5] ? arguments[5] : null;
    let AdapteeClass = require('./adaptee_class/'+encodeModule),
    adapteeObj = new AdapteeClass();

  }
}

util.inherits(Adapter, Target)

module.exports = Adapter