/**
 * concreateDecorateA
 */

let util = require('util')
let Decorate = require('./decorate')

function ConcreateDecorateA() {
  Decorate.call(this)
  this.operation = function () {
    Decorate.operation;
    console.log('add some decorate by ConcreateDecorateA')
  }
}

util.inherits(ConcreateDecorateA,Decorate)

module.exports = ConcreateDecorateA