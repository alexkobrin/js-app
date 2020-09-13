//  ООП в JS
// unit 1 
// Unit 2 


// let a = {
//   text: "Hello",
//   color: "red",
//   bold: true,
//   show: function(){
//     console.log(this.color)
//   }
  
// }
// let b = {
   
//   fontSize : "24px",
//   __proto__: a
// }
//  b = 5


// let c = {
//   fontFamily: "verdana",
//   __proto__: b
// }
// console.log(c)
// console.log(c.bold)
// console.log(c.hasOwnProperty("color"))
// //  a -> b -> c


// user.password = "hellooo"
// console.log(user.validatePassword())
// userProfile.age = 25;
// userProfile.username = "Denisio"
// console.log(userProfile)


// Unit 3



// let a = 'Ivan';
// let b = '7778989'
// let c = 'Alex';
// let d = '777eeee989'

// const person = new User (a, b);
// const person2 = new User (c, d);
// // console.log(person)
// console.log(person2)
// console.log(person.validatePassword())
// console.log(person.username)

// let firstStudent = new Student(c,d,798)
// console.log(firstStudent)
// console.log(firstStudent.getStudentCourses())
// const btn = new Button ("200px", "50px","red", 1)
// btn2 = new ModernButton("200px", "50px","red", 1, 50)
// console.log(btn2)
// btn.render()

// unit 3
// unit 4

// class User {
//     constructor(name) {
//         // this._name = name
        
//     }
//     #test = 'Hohoh'
//     set name (name) {
//         console.log('Private=' + this.#test)
//         this._name = name.trim().toLowerCase()
//     }
    
//     get name(){
//         return this._name
//     }
//     one() {
//         console.log(this.#test)
//     }
// }
// Private(#)
// Защищенные (_) Protected
// Public
 
// const student = new User()
// student.name = '           Ivan'
// // student._name = 'DEn'  НЕльзя обращаться!!!!
// console.log(student) 
// console.log(student.name) 

// class User2 extends User{}
// const student2 = new User2()
// student2.one()
// student2.name = 'Oleg'

// Task 1 

// class Test {
//     constructor(test1,test2) {
//         this.test1 = test1
//         this.test2 = test2
//     }
//     set testProp (testProp) {
//         this._testProp = testProp.trim().toLowerCase()
//     }
//     get testProp() {
//         console.log(this._testProp) 
//     }
// }

// testA = new Test('smth','smth2')
// console.log(testA)
// testA.testProp = 'SRT'
// testA.testProp

// Uniit 6
// Статические методы -- добавляется в класс путем слова static

// class User {
//     constructor(name) {
//        this.name = name
        
//     }
//     static getRole(email){
//         // 
//         // Реализация
//         return 'student'
//     }
//     static getId(email) {
//         // return id user
//     }
//     static getUser(id) {
//         // return user 
//     }
    
// }
// const person = new User('Ivan')
// console.log(person)
// // Цепочка ----------
// // --> class -> object -> object.getRole


// console.log(User.getRole('alex@sgs.e'))
// // console.log(person.getRole())

// Task 1 ,task 2,task 3
// class Validate {
//     constructor(one) {
//         this.a = one
//     }
//     static isNumber(number) {
//         if (typeof number == 'number'){
//             return true
//         } else return false
//     }
//     static isIntg (number) {
//         return (number ^ 0) === number;
//     }

// }
//  console.log(Validate.isNumber( '1'))
//  console.log(Validate.isIntg(5))
 
// Unit 7

// Arrow function -> this -> window

// document.querySelector('.b-1').onclick = function () {
//     console.log(this)
//     this.style.background = 'red';
// }

// document.querySelector('.b-1').addEventListener('click', f1) 
    

// function f1() {
//     console.log(this)
//     this.style.background = "orange"
// }

// let p = document.querySelectorAll('p')
// for ( let i = 0; i<p.length; i++ ) {
//     p[i].onclick = f1 
// }

// class U2 {
//     constructor(model){
//         this.model = model
//     }
//     showThis(){
//         console.log(this)
//     }
// }

// const boat = new U2('747')
// const boat2 = new U2(333)
// console.log(boat)
// console.log(boat2)
// boat.showThis()
// boat2.showThis()

// Unit 8

// const b1 =  document.querySelector('.b-1') 
// const b2 =  document.querySelector('.b-2') 
// b1.onclick = test;
// function test(color, num) {
//     console.log(this)
//     console.log(num)
//     this.style.background = color
// }

// Method call()

// function.call(context,[arg1,arg2...])

// test.call(b1)
// b2.onclick = function() {
//     test.call(b1,' green',555)
// }

// b2.onclick = function() {
//     test.apply(b1,['green', 46])
// }


// // bind
// let a = test.bind(b1, 'orange', 789)
// let b = test.bind(b2, 'red', 999)
// b2.onclick = b


// Unit 9  ----- Grid view
// Unit 10  ----- Not available
// Unit 11  ----- Not avaliable


// const dataExample = [
//     {
//         company: 'Alfred <b>Futterkister</b>',
//         chef: 'Maria Andres',
//         country: 'Germany'
//     }
// ]



// class GridView {
//     /* 
//     properties
//     @param[array] _tableClass  - оформление классов цсс
//     @param[array] data    - входные данные
//     @param[array] _attribute  - управляем, что выводим и как из входных
//     @param[array] _element   - куда выводить таблицу
//     @param[array] _element   - куда выводить таблицу
//     @param[array] _headerClass   - куда выводить таблицу
//     */
//     constructor() {
//         this._header = '';
//         this._headerClass = [];
//         this._element = 'body';
//         this._attribute = []
//     }

//     /**
//      * 
//      * Method set header
//      */

//      set header(header) {
//          if(typeof header === 'string' && header.trim() != '') {
//              this.header = header.trim()
//              return true
//          }
//          return false
//      }

//      /**
//      * 
//      * Method set headerClass
//      */

//     set headerClass(headerClass) {
//         if(typeof headerClass === 'object' ) {
//             this.headerClass = headerClass
//             return true
//         }
//         return false
//     }

//       /**
//      * 
//      * Method set element
//      */

//     set _element(element) {
//         if( document.querySelector(element))  {
//         this._element = document.querySelector(element) ;
//         return true;     
//         }
//         return false;  

//     }
//     render() {

//     }
// }

 