let util = require('util')
let Person = require('./Person')
/**
 * @desc 定义 student
 */

 function Teacher () {
   Person.call(this)
 }

//  Student 继承 Person

util.inherits(Teacher, Person)

Teacher.prototype.teach = function () {
  console.log(`i'm teaching!`)
}

module.exports = Teacher