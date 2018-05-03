let BASE_DIR = __dirname


let fs = require('fs')
fs.readFile(BASE_DIR+'/b.text', 'utf8', (err, data) => {
  if(err) {
    throw err
  }
  console.log(data)
})