let fs = require('fs')

function getFileData(callback) {
  fs.readFile('index.conf','utf8', function (err,data) {
    if(err) throw err ;
 
    callback(data)
  })
}

function returnData(callback) {
  getFileData(function (data) {
    setTimeout(function () {
      console.log(data)
      // callback(data)
    }, 2000)
  })
}

function echo(data) {
  console.log(data)
}
// getFileData(echo)
returnData()