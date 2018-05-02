/**
 * concreateDecorateB
 */

let util = require('util')
let Decorate = require('./decorate')

function ConcreateDecorateB() {
  Decorate.call(this)
  this.operation = function () {
    Decorate.operation;
    console.log('add some decorate by ConcreateDecorateB')
  }
  this.addBehavior = function() {
    console.log('add new Behavior')
  }
}

util.inherits(ConcreateDecorateB, Decorate)

module.exports = ConcreateDecorateB