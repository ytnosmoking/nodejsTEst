


let  http = require('http')


http.createServer((req, res) => {

    let resHtml = `<html><head><title>hello</title></head>
        <body>
            <h1>Hi node! I like you so much!</h1>        
        </body>
    </html>`

    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(resHtml)
}).listen(1337, '127.0.0.1')


let test = require('./test')

console.log(test.name)
console.log(test.happy())
console.log('Server running')