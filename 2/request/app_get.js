let request = require('request')

request.get('http://127.0.0.1:1337', (err, response, result) => {
  console.log(result)
})