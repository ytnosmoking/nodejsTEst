let BASE_DIR = __dirname


let fs = require('fs')
fs.rename(BASE_DIR+'/a.text', BASE_DIR+'/b.text', err => {
  if(err) {
    throw err
  }
  console.log('rename completed')
})