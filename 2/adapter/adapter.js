/**
 * @desc adapter.js
 */


 let util = require('util')
 let Target = require('./target')
 

 let Adaptee = require('./adaptee')

 /**
  * @desc 定义Adapter 函数
  */

  function Adapter () {
    Target.call(this)
    this.request = function() {
      let adapteeObj = new Adaptee()
      adapteeObj.specialRequest()
    }
  }

  util.inherits(Adapter, Target)

  module.exports = Adapter