let util = require('util')
let Person = require('./Person')
/**
 * @desc 定义 student
 */

 function Student () {
   Person.call(this)
 }

//  Student 继承 Person

util.inherits(Student, Person)

Student.prototype.study = function () {
  console.log(`i'm learning!`)
}

module.exports = Student