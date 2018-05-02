

let Person = require('./Person')
let Student = require('./Student')
let Teacher = require('./Teacher')
let Coder = require('./Coder')

let personObj = new Person()
let studentObj = new Student()
let teacherObj = new Teacher()
let coderObj = new Coder()

console.log(`---for base class of person ---`)
personObj.sleep()
personObj.eat()
console.log('-------------------------------')


console.log(`---for class of student---`)
studentObj.sleep()
studentObj.eat()
studentObj.study()
console.log(`--------------------------`)

console.log(`--- for class of teacher ---`)
teacherObj.sleep()
teacherObj.eat()
teacherObj.teach()
console.log(`----------------------------`)

console.log(`--- for class of coder ---`)
coderObj.sleep()
coderObj.eat()
coderObj.code()
console.log(`--------------------------`)