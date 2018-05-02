module.exports = function () {
  this.eat = function() {
    console.log('eat')
  }
  this.say = function() {
    console.log('say')
  }
}
// 1.1 返回一个函数 有eat say 


exports.Person = {
  eat:function() {
    console.log('eat')
  },
  say: function() {
    console.log('say')
  }
}
// 1.2  返回一个对象 有eat say