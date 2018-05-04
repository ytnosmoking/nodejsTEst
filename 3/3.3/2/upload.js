
let url = require('url')
let formidable = require('formidable')
exports.upload=(req, res) => {


  var timestamp = Date.parse(new Date())

  // let readPath = __dirname +'/'+ url.parse('show_image.html').pathname
  // let indexPage = fs.readFileSync(readPath)
  let form = new formidable.IncomingForm()
  form.uploadDir = __dirname+'/uploadFile'
  form.parse(req, (err, fields, files) => {
    // console.log(fields)
    let fileName = timestamp + '_' +files.image.name
    console.log(files.image.path)
    if(err) throw err;
    fs.renameSync(files.image.path, __dirname+'/uploadFile/'+fileName);
    // res.writeHead(200, { "Content-type": 'text/html'})
    // res.end(indexPage)
    res.render(__dirname+'/jade/show_image.jade', {
      "imgUrl": "/uploadFile/"+fileName,
      "showImg": " show up Image"+fileName
    })
  })
}