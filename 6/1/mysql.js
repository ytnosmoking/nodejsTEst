import { connect } from 'tls';

let mysql = require('mysql')
let connection = mysql.createConnection({
  host: 'test1',
  user: 'root',
  password: 'gytgyt8906',
  database: 'world'
})

// connection.connect(function(err) {
//   if(err) {
//     console.log(err)
//   }
//   console.log('done')
// })
connection.connect()
connection.query("SELECT * FROM user", (err, rows) => {
  console.log(rows)
})

connection.query('INSERT INTO posts SET ?', {title: "test"}, function(err, result) {
  // if(err) throw err;
  console.log(result)
})

connection.end(err => {
  console.log('end')
})