

let BASE_DIR = __dirname


let fs = require('fs')
var existsBool = fs.existsSync(BASE_DIR+ '/b.text')
console.log(existsBool)

// fs.exists(BASE_DIR+'/b.text', exists => {
//   if(exists) {
//     console.log(exists)
//     console.log('true')
//   }else {
//     console.log(false)
//   }
// })