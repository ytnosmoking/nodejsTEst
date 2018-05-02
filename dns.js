let dns = require('dns')


dns.resolve4('www.baidu.com', (address)=>{
    console.log(address)
})
console.log('dns is running')