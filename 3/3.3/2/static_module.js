let BASE_DIR = __dirname;
let CONF = BASE_DIR + '/conf/';
let STATIC = BASE_DIR + '/static';
let mmieConf;


// http = require('http'),
let fs = require('fs'),
  // url = require('url'),
  path = require('path');
mmieConf = getUrlConf();
let CACHE_TIME = 60 * 60 * 24 * 365;

exports.getStaticFile = function (pathname, res, req) {
  pathname = decodeURI(pathname)
  let extname = path.extname(pathname);
  console.log(extname)
  extname = extname ? extname.slice(1) : '';
  let realPath = __dirname + pathname;
  console.log(pathname)
  let mmieType = mmieConf[extname] ? mmieConf[extname] : 'text/plain';
  // 在设置header之前 先判断请求的资源文件是否需要缓存


  fs.exists(realPath, exists => {
    if (!exists) { // 判断文件是否存在
      res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.write(`This requeset URL ${pathname} was not found on this server`);
      res.end();
    } else {
      // 设置缓存
      let fileInfo = fs.statSync(realPath) // 返回读取文件stats
      // console.log(fileInfo)
      let lastModified = fileInfo.mtime.toUTCString(); // 更改时间

      // 设置缓存
      if (mmieConf[extname]) {
        let date = new Date();
        date.setTime(date.getTime() + CACHE_TIME * 1000)
        res.setHeader("Expires", date.toUTCString())
        res.setHeader("Cache-Control", "max-age=" + CACHE_TIME)
      }
      //    console.log(res.setHeader())

      if (req.headers['if-modified-since'] && lastModified == req.headers['if-modified-since']) {
        res.writeHead(304, 'Not Modified')
        res.end()
        console.log(11111)
      } else {
        fs.readFile(realPath, 'binary', (err, file) => {
          if (err) {
            res.writeHead(500, {
              'Content-Type': 'text/plain'
            });
            res.end(err);
          } else {
            console.log(22222)
            res.setHeader('Last-Modified', lastModified)
            res.writeHead(200, {
              'Content-Type': mmieType
            });
            res.write(file, 'binary');
            res.end();
          }
        });
      }
    }
  });
};

/**
 * @desc MMIE
 */
function getUrlConf() {
  let routerMsg = {};
  try {
    let str = fs.readFileSync(CONF + 'mmie_type.json', 'utf8')
    routerMsg = JSON.parse(str)
  } catch (e) {
    //    console.error(e)
    console.error('JSON parse err')
  }
  return routerMsg
}