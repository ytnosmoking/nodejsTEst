let BASE_DIR = __dirname


let fs = require('fs')
fs.chmod(BASE_DIR+'/b.text', '777', err => {
  if(err) {
    throw err
  }
  console.log('chmod completed')
})