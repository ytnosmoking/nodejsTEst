let fs = require('fs');
let url = require('url');

exports.goIndex = (res, req) => {
  let readPath = __dirname + '/' + url.parse('index.html').pathname
  console.log(url.parse('index.html'))
  let indexPage = fs.readFileSync(readPath)
  res.end(indexPage)
}