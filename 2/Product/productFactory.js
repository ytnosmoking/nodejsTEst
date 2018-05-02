



/**
 * productFactory.js
 */

 let ProductA = require('./productA')
 let ProductB = require('./productB')
 exports.createProduct = type => {
   switch(type) {
     case 'ProductA':
     return new ProductA();
     break;
     case 'ProductB':
     return new ProductB();
     break;
     default:
     return 'this is no a product!'
     break;
   }
 }