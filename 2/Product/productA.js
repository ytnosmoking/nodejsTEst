/**
 * productA.js
 */

 let Product = require('./product')
 let util = require('util')

 /**
  * @desc 定义ProductA 函数
  */

  function ProductA () {
    Product.call(this)
    this.getProduct = function() {
      console.log('product is get from class of ProductA')
    }
  }

  util.inherits(ProductA, Product)
  module.exports = ProductA