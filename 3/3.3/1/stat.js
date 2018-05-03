let BASE_DIR = __dirname


let fs = require('fs')
fs.stat(BASE_DIR+'/b.text', (err, stats) => {
  if(err) {
    throw err
  }
  console.log(stats)
})