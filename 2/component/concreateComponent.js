/**
 * concreateComponent
 */

 let util = require('util')
 let Component = require('./component')

 /**
  * @desc 定义 concreateComponent 类
  */
 function ConcreateComponent() {
   Component.call(this)
   this.operation = function() {
     console.log('output by the concreate component')
   }
 }

 util.inherits(ConcreateComponent, Component)
 module.exports = ConcreateComponent