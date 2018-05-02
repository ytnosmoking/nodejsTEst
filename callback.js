function waiteFive(name, callback) {
  // var pus = 0;
  // var currentDate = new Date()
  // while(pus< 5000) {
  //   var now = new Date()
  //   pus = now - currentDate
  // }
  setTimeout(function(){
    callback(name)
  },5000)
  // callback(name)
}
function echo (name) {
  console.log(name)
}
waiteFive('dangdangdang', echo)
console.log('its over')