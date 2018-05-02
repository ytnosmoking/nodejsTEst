let util = require('util')
let Person = require('./Person')
/**
 * @desc 定义 student
 */

 function Coder () {
   Person.call(this)
 }

//  Student 继承 Person

util.inherits(Coder, Person)

Coder.prototype.code = function () {
  console.log(`i'm coding!`)
}

module.exports = Coder