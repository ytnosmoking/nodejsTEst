let componet = require('./component')
let decorate = require('./decorate')
let concreateComponent = require('./concreateComponent')
let concreateA = require('./concreateDecorateA')
let concreateB = require('./concreateDecorateB')


console.log(new componet().operation())
console.log(new decorate().operation())
console.log(new concreateComponent().operation())
console.log(new concreateA().operation())
console.log(new concreateB().operation())
console.log(new concreateB().addBehavior())
