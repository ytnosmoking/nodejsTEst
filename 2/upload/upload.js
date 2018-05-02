let formidable = require('formidable')
let http = require('http')
let util = require('util')

http.createServer((req, res) => {
  if(req.url === '/upload' && req.method ==="POST") {
    let form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.write('received upload:\n\n')
      res.end(util.inspect({ fields, files}))
    })
    return 
  }
  
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(`
    <form action = "/upload" enctype = "multipart/form-data" method ="post">
      <input type="text" name="title"><br>
      <input type="file" name="upload" multiple="multiple"><br>
      <input type= "submit" value="Upload">
    </form>
  `)
}).listen(8080)