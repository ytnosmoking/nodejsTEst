/**
 * productA.js
 */

 let Product = require('./product')
 let util = require('util')

 /**
  * @desc 定义ProductA 函数
  */

  function ProductB () {
    Product.call(this)
    this.getProduct = function() {
      console.log('product is get from class of ProductB')
    }
  }

  util.inherits(ProductB, Product)
  module.exports = ProductB