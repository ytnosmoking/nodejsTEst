
let url = require('url')
let formidable = require('formidable')
exports.upload=(req, res) => {
  let readPath = __dirname +'/'+ url.parse('show_image.html').pathname
  let indexPage = fs.readFileSync(readPath)
  let form = new formidable.IncomingForm()
  form.uploadDir = __dirname+'/uploadFile'
  form.parse(req, (err, fields, files) => {
    // console.log(fields)
    console.log(files.image.path)
    if(err) throw err;
    fs.renameSync(files.image.path, __dirname+'/uploadFile/test.png');
    res.writeHead(200, { "Content-type": 'text/html'})
    res.end(indexPage)
  })
}