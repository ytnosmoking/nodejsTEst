/**
 * decorate.js
 */

 let util = require('util')
 let Component = require('./component')

 /**
  * @desc 定义 Decorate类
  */

  function Decorate() {
    Component.call(this)
  }

  util.inherits(Decorate, Component)

  module.exports = Decorate