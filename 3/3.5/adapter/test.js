let encodeModule = require('./encode_module')


console.log('--- encode with hash start ---')
let hashEncodeStr = encodeModule.encode('hash', 'md5', 'ytian', 'hex');
console.log(hashEncodeStr)
console.log('--- encode hash end ---')

console.log(`-- decode start ---`)
encodeModule.decode('hash', 'md5', 'ytian', 'hex');
console.log(`--- decode end ---`)