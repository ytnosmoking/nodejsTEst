let request = require('request')

request.post('http://127.0.0.1:1337', {
  form: {
    'name': 'danghung',
    'book': 'node.js'
  }
}, (error, response, result) => {
  console.log(result)
})