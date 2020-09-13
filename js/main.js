// const filterBox = document.querySelectorAll('.box')
// document.querySelector('nav').addEventListener('click',  event => {
//     if (event.target.tagName !== 'LI') return false

//     let filterClass = event.target.dataset['f']
//     filterBox.forEach( elem => {
//       elem.classList.remove('hide')
//       if(!elem.classList.contains(filterClass) && filterClass !== 'all'){
//         elem.classList.add('hide')
//       }
//     })
// })


// let a = 'Alex'
// let b = '37'
// let z7 = 'baran'

// let c = ['Alex', 37, 'baran']
// let d = []
// console.log(c)
// console.log("'Добро '+'пожаловать '+' на курс'")
// document.getElementById('id').innerHTML = 'Hello mysic'
// document.querySelector('h2.header').innerHTML = 'Hello mysic'
  

// let a = 6 
// if ( a > 9 ) {
//     console.log('yes')
// }
// else {
//     console.log('no')
// }

// let inputIn = document.querySelector('.input-in') 
// let button = document.querySelector('button')
// button.onclick = function () {
//     let num = +inputIn.value
   
//     if (num  >= 18 && num <60) {
//        console.log(`Your age is ${num} `)  
//    }
//    else if ( num > 60) {
//     console.log( 'черт!!!')
//    }

//    else {
//        console.log('Your age is under 18')
       
//    }
//    switch(num){
//        case 17:
//            console.log(' you need to wait another year!')
//            break;
//            case 18:
//             console.log(' you need to wait another year ha-ha!')
//             break;
//             default:
//                 console.log('UPS something goes wrong!!!!')
//    }

 
// document.querySelector('button').onclick = myfunc

// function myfunc (){
// console.log(document.querySelector('#one').value)
// document.querySelector('button').style.backgroundColor= document.querySelector('#one').value




// }
// document.querySelector('#one').oninput = () => {
//     document.querySelector('span').innerHTML = document.querySelector('#one').value
   
     
// }
// document.querySelector('#btn2').onclick = () => {
//     let myCheckBox = document.querySelector('#i2').value
//     console.log(myCheckBox.checked)
//     if (myCheckBox.checked) {

//     }
    
// }


// let button = document.querySelector('button') 
 
// button.onclick = function () {
      
//      let myCheckBox = document.querySelector('#i-2')
//  if (myCheckBox.checked) {
//      console.log('done great')
//  }
//  else {
//      console.log('НЕ нажат')
//     }
//  }



// let button = document.querySelector('.b-3')
// button.onclick = (f3) => {
// let input1 = document.querySelector('.i-31').value
// let input2 = document.querySelector('.i-32').value

// if (input1 > input2) {
//     console.log(` The larger number is ${input1}`)
// }
// else   {
//     console.log(` The larger number is ${input2}`)
// }
  
// }
  

//   document.querySelector('.btn').onclick = (event)=> {
//     event.preventDefault()
// //    let text =  document.querySelector('.text')
// //    console.log(text.value )
// //    text.value = 'one'
// let form = document.querySelector('form')
 
// console.log(form.elements.n1.value )
// console.log(form.elements.n2.value )
//   }
 
// let c = '())';
// let count = 0;



// for ( let i = 0;  i < c.length; i++) {
   
//     if (c[i] == '(') {
//         count++ 
//     }
//     if (c[i] == ')') {
//         count--
//     }
//     if ( count < 0) {
//         break
//     }
// }
// console.log(count)
//  if (count == 0 )  {
//      console.log(true)}
//      else  {
//          console.log(false);
//  }

// Циклы 
// let div = document.querySelectorAll('.one')

 
//  for (let i = 0;  i < div.length; i++) {
//  div[i].style.background = 'red'
//  div[i].onclick = two

//  }
//  function two() {
//      console.log('worrk!!!')
//  }
   
//  let b = document.getElementsByClassName('one')
  

//  for ( let i=0; i < b.length; i++) {
//      b[i].style.border = ' 3px solid green';
   
//  }

//  document.querySelector('button').onclick = () => {
    
//     let r = document.querySelectorAll('input[type="radio"]')
   
//     for (let i = 0; i<r.length; i++){
//         if ( r[i].checked){
//                 console.log(r[i].value)
//         }
    
//     }
// }


//   let out =document.querySelector('.out')
// for ( let i=0; i<5; i++){
//     for(let k=0; k<10; k++){
//         out.innerHTML += k
//     }
    
// }
 
//  for (let i= 1; i<10; i++){
//    //  out.innerHTML += '3*'+i+ '=' + (i*3) + '<br>'
     
//      for(let k=1; k<10; k++) {
//         out.innerHTML += `${i} * ${k}=${k*i} <br>`;
//      }
//      out.innerHTML += '<hr>'
//  }
//  for ( let i=1; i<=3; i++){
     
//      for( let k=1; k<=3; k++) {
//         out.innerHTML += `*_`    
//         }
//         out.innerHTML += `<br>`     
//  }
//  let a = 8
//  let b = 10
//  function sum () {
//    return a * b ;
//  }
//  let c = sum()
//  console.log(c)
//  function sum2 (x, y) {
//      return x * y
//  }
//  console.log(sum2(4,5))
// let out =document.querySelector('.out')
// for ( let i=1; i<=3; i++){
//          for( let k=1; k<=6; k++) {
//             if ( k % 2 == 1) {
//                 out.innerHTML += 1
//             }
//             else {
//                 out.innerHTML += 0
//             }  
//             }
//             out.innerHTML += `<br>`     
//      }
// -------------- Task 19 for unit 6
 
// -------------- Task 1 for unit 7
// let a1 = 8;
// function t1() {
//  document.querySelector('.out-1').innerHTML = a1
// }
// document.querySelector('.b-1').onclick = t1

// -------------- Task 2 for unit 7

// let a2 = 800;
// function f2() {
    //  return a2
    // }
    
    // document.querySelector('.b-2').onclick =function() {
        // document.querySelector('.out-2').textContent = f2();
        // }
        
        
// -------------- Task 2 for unit 7

// function t3(a,b) {
//  return a * b
// }
// document.querySelector('.b-3-1').onclick =function() {
//     document.querySelector('.out-3-1').textContent = t3(3,4);
// }
// document.querySelector('.b-3-2').onclick = function(){
//     document.querySelector('.out-3-2').textContent = t3(5,6);
// }

// let a = document.querySelector('.out-3-1').textContent
// console.log(a)

// for (let i = 0; i < 6; i++) {
//     console.log(i)
// }


// let k = 0
// while(k<5){
//    k++
// console.log('k ' + k)
// if ( k == 3) break

// }

// let sum = 0
// let p = 0
// while(p <= 3){
//     sum = sum + p
//     p++
// }
// console.log('sum = ' + sum)

// ******
// ******
// ******

 
// let j = 0
// let outStr = ''
// let flag = 3
// while (j < 4) {
//     let j1 = 0
//   while ( j1 < 4 ) {
//       if ( j1 < flag) {
//           outStr += '0';
//       }
//       else {
//            outStr += ' * '
//       }
       
//         j1++
//   }
//   flag--
//   outStr += ' <br>'
//    j++

// }

// out.innerHTML = outStr
 







// -------------------
// Unit 8 Tasks
// -----------------
// Task 1 for unit 8------------------


// let b1 = document.querySelector('button')
// let num = 0
// let out = document.querySelector('.out') 
// let outStr = '' 
//   b1.onclick= function t1 ()  {
//     while (num < 50) {
//         num++
//       outStr += `${num} &nbsp`
//     }
//     out.innerHTML = outStr   
//   }

// Task 2 for unit 8 ------------------

//  let b2 = document.querySelector('button')
// let num = 2

// let out2 = document.querySelector('.out2') 
// let outStr = '' 
//   b2.onclick= function t1 ()  {
//      while ( num < 123) { 
//      if ( num % 2 == 0) {
//         outStr += `${num} &nbsp`  
// } else {
// }
// num++
//  }
//  out2.innerHTML = outStr 
//   }

// Task 2 for unit 8 ------------------

// let b3 = document.querySelector('button')
// let num = 25
// let out3 = document.querySelector('.out3') 
// let outStr = '' 
//   b3.onclick= function t3 ()  {
//       while (num > 6) {
//         outStr += `${num} &nbsp`  
//          num--  
//       }
//     out3.innerHTML = outStr   
//  }

 
// ------------------ end
 

// let a = document.createElement('div')
// a.innerHTML = 'hello!'
// a.classList.add ('ttt')
// document.querySelector('.test').appendChild(a)


// console.log(a)




// -------------------
// Unit 9Tasks
// -----------------
// Task 1 for unit 9------------------

// let b1 = document.querySelector('.b1')
// let out = document.querySelector('.out-1')
// b1.onclick = function f1 () {
//     out.style.width ='200px';
//     out.style.height = '40px'
    
    
// }

   // Task 2 for unit 9------------------
// let b2 = document.querySelector('.b2')
// let out = document.querySelector('.out-2')
// b2.onclick = function f2 () {
//     out.classList.add('bg-2')
// }
    

// Task3 for unit 9------------------

// let b3 = document.querySelector('.b3')
// let out = document.querySelector('.out-3')
// b3.onclick = function f2 () {
//     out.classList.remove('bg-3')
// }

//   --------------------

// Вывести большее значение 
// let b = [ 4,2,4,8,9,22,44,90,120]
// let max = b[0]
// for ( i=0; i<b.length; i++){
//     if(b[i]> max){
//         max = b[i]
//     }
// }
// console.log('max: ' + max)


// let b = [ 4,2,4,8,9,22,44,90,120]
// let sum = 0
// for ( i=0; i<b.length; i++){
//     sum += b[i] 
// }
// console.log('sum: ' + sum)





// -------------------
// Unit 10Tasks
// -----------------
// Task 1 for unit 10------------------

// let ar1 = ['hello', true, 25]
// let b1 = document.querySelector('.b1')
// let out = document.querySelector('.out-1')
// b1.onclick = () => {
//    out.innerHTML = ar1
// }


// Task 2 for unit 10------------------ == task 1 ?????
// Task 3 for unit 10------------------  
// let ar1 = ['hello', true, 25]
// let ar2 = ar1.length
//  console.log(ar2)
//  console.log(ar1.length)

// ---------------
// const a = [1,2,3,4,9,7];
// const b = ['a','b','e', 'q'];

 
// console.log(a.push(888))
// console.log(a)


// -------------------
// Unit 11Tasks
// -----------------
// Task 1 for unit 11------------------

// let b1 = document.querySelector('.b1')

//   let out = document.querySelector('.out-1')
// let  d1 = [33,'best', 66, 'best'];
 
// b1.onclick = function f1  ( ) {
//     let i1 = document.querySelector('.i-1') 
//      d1.push(i1.value)
//     out.innerHTML = d1
//     i1.value = ''
     
// }
 
 
 

// ------------------------------



//  let a = [4,5,6]
//  let b =[
//      [1,2,3],
//      [4,5,6],
//      [7,8,9],
//  ]
//  console.log(b)
//  for ( let i = 0; i<b.length; i++) {
//     //  console.log(b[i])
//      let c = b[i]
//       for (let k = c.length - 1; k>=0; k--) {
//           console.log(c[k])
//       }
//  }
// out = ''
//  for (let i=0; i < b.length; i++) { 
//     for ( let k = 0; k < b[i].length; k++){
//         //  console.log(b[i][k]);
//          if (b[i][k]> 4) {
//            out +=b[i][k] + ' '  ;
//          }
         
//       }
//       out += '<br>'
// }
// console.log(out)
// document.querySelector('.out').innerHTML = out

// let d = [1,0,0,0,0,];
//  document.querySelector('.out').innerHTML = d

// let k = 0

// document.querySelector('button').onclick = () => {

//     d[k]=0
//     d[k+1] = 1
//     k++   
    
   
// document.querySelector('.out').innerHTML = d
// }
// console.log(d[k])

 
// -------------------
// Unit 12 Tasks
// -----------------
// Task 1 for unit 12------------------
// let a1 = [[55,122],55,358,[10,7896],152];
//  document.querySelector('button').onclick = function f1 () {
//    for ( let i = 0; i<a1.length;i++) {
//    for ( let k = 0;  k< a1[i].length; k++) {
//           if ( a1[i] == 55 || a1[i][k]== 55) {
//             console.log( a1[i] || a1[i][k] )
//           }
//    }
//     }   
//   }

   
 




// let b1 = document.querySelector('.b1')
// let inputIn = document.querySelector('.input')
 
// b1.onclick = () => {
//     let num = +inputIn.value
//     inputIn.value = ''
     
//     if ( num % 2 == 0) {
//         console.log(num + ' The number is even')
//     } else {
//         console.log(num + ' The number is odd')
//     }
// }


// --------------------- unit 13
//  const a ={
//      "a": 5,
//      "b": 'Hello',
//      "z2": 'h1',
//      y43: 1999,
//  };

// Unit 13 Tasks
// -----------------
// Task 1 for unit 13------------------

// let a1 = {
//     "one" : 15,
//     "two" : 16,
//     "five" : 20
//     };
//     let out  = document.querySelector('.out')
//     let b1 = document.querySelector('.b1');
//     b1.onclick = function f1 () {
//           out.innerHTML = a1.two
//     }

  // Task 2 for unit 13------------------
//    a2 = {
// "one" : "hello",
// "two" : "mahai",
// "five" : "hi"
// };
 

// let out  = document.querySelector('.out')
// let b1 = document.querySelector('.b1');
// let x = ''
// b1.onclick =() => out.innerHTML = a2["five"]  
      

// Task 3for unit 13------------------
// Using previous varibles from task 2
// b1.onclick =() => out.innerHTML = "&nbsp;" + a2["five"]  
     
 
// ----------------------


// key :" 70e1ed322b02acbc57d443dd91065f3e"

// //https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=439d4b804bc8187953eb36d2a8c26a02
// fetch('http://api.openweathermap.org/data/2.5/forecast?id=703448&appid=70e1ed322b02acbc57d443dd91065f3e')

// .then(function (resp ) {return resp.json()})
// .then(function(data){
//     console.log(data);
//     document.querySelector('.city').textContent = data.city.name
//     document.querySelector('.clouds').textContent = data.list[0].weather[0].description
//     document.querySelector('.ico').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="">`
//     document.querySelector('.temp').innerHTML =Math.round(data.list[0].main.temp - 273)  + "&deg";
// })
// .catch(function() {

// })

// let  arr= [2,3,4,60]
// let k = {
//     name: 'dfg',
//     fitsname: 'dffffg',
//     secondname: 'dffcvbfg',
// } 
//  for ( let i=0; i<arr.length; i++) {
//      console.log(arr[i])
//  }
//  for ( let key in k ) {
//      console.log(k[key] + ' ' + key)
//  }
 



// Unit 15 --------------------

//    let a = new Set()
//    a.add(1)
//    a.add(3)
//    a.add('to')
// //    a.delete('hello')
//    console.log(a)
   
//    console.log(a[0])  !!! SEt
 
// for (let item of a ) {
//     console.log(item)
// }

// let arr = [1,2,3,4,5,'Hello', 3, 4]
// let b = new Set(arr)
// console.log(b)
// let barr = Array.from(b)
// console.log(barr)


// Unit 14 Tasks
// -----------------
// Task 1 for unit 14------------------

// let s1 = new Set()
// s1.add('h')
// s1.add('b')
// s1.add('o')
// s1.add('h')
// console.log(s1)

// Task 2 for unit 14------------------

// let b3 = document.querySelector('button')
// let i2 = document.querySelector('input')
// let out = document.querySelector('.out') 
// let s2 = new Set ( )
// // b2.onclick = () => { 
// //      s2.add(i2.value)
// //      i2.value = ''
// //      console.log(s2)
  
// // }
 
// b3.onclick = () => { 
//          s2.delete(i2.value)
//          i2.value = ''
//          console.log(s2)
// }


// ---------------- Unit 15
//  let arr = [4,7,9];
// console.log(arr)
//  Option 2
//  for ( let i=0; i<arr.length; i++ ){
//   console.log(arr[i])
//  }
// Переберает по ключам
// for( let item in arr) {
//   console.log( item  + arr[item])
// }

// Переберает по значения 
//  
// Unit 16Tasks
// -----------------
// Task 1 and 2 for unit 16------------------

// let b1 = document.querySelector('button')
// let i1 = document.querySelector('input')
// let out = document.querySelector('.out') 
// const arr = [4,8,9,22,'Hello','Mysiashka']



// for ( let item of arr) {
//   console.log(`${item}`)
// }

// for ( let i= 0; i<arr.length; i++) {
//   console.log(`${i} ${arr[i]} `)
// }

// for ( let item in arr) {
//   console.log(`${item}  ${arr[item]} `)
// }


// Task 3 for unit 16------------------
// let out3  = document.getElementsByClassName('out3')
 
 
//  b1.onclick = () => {
//    for ( item of out3) {
//      item.innerHTML = 3 
//    }
//  }


// Unit 17 
// -----------------
//  Function map переберает array
// let a = [4,5,6,7,200,0,-2]
// let b = a.map( (item, index) => item * 5)
 
// let c = a.filter( item => item % 2 == 0  
    
// )
// console.log(c)

// Task 1 for unit 17------------------


// let t1 = () => {
//  a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] 
// let a1res = a1.map (  item => item * 2  )
 
// console.log(a1res) 
// }
// t1()

// Task 2 for unit 17------------------
//  let t2 = () => {
//   let a2= [2,3,4,5,10,11,12]
//   let  a2_res = a2.map((item)=> item * item) 
//  console.log(a2_res)
  
//  }
//  t2 ()
// Task 3 for unit 17------------------

//  a3 = [4,"3",6,7,"12",34,"56",78,90,11]
// let t3 = () => {
 
//    let a3_res = a3.map((item)=> +item  )
//    console.log(a3)
//     console.log(a3_res)
// }
// t3()
 
// let a3Q = a3.map((item) => item * 2 ).filter(item => {
//    if ( item > 10 && item < 100)
//    return item
// }  )
//  console.log(a3Q)

// Unit 18
// -----------------
// let a = 'Hello , hi, mahai'
// console.log(a.split(''))
// let b = [1,2,3,4]
// let c = []
// console.log(b.join('-'))
// b.forEach(function(elem, index){
//   return c.push(elem)

// })
// console.log(c)

// Task 1 for unit 18------------------
// a1 = [4,5,6,7,12,34,56,78,90,11] 
// a1_res = []
// let t1 = () => {
//  a1.forEach(element => {
//    a1_res.push(element * 2)
//  });
// }
// t1()
// console.log(a1_res)
 

 // Task 2 for unit 18------------------

//  a1 = [2,3,4,5,10,11,12] 
//  a2_res = []
//  let t2 = () => {
//   a1.forEach(element => {
//   a2_res.push(element / 2) 
//    });
//  }
 
//  t2()
//  console.log(a2_res)
   
// Task 3 for unit 18------------------
// a3 = [2, "hello",,'rrrr',8,'eeee', 3, -5, "hi", 4,-7, "Mazai"] 
// a3_res = []

// let t3 = () => {
//     a3.forEach(element => {    
//        if (element > 0 || element < 0) {
//         a3_res.push(element) 
//        }
//     });
//      console.log(a3_res)
//    }
   
//    t3()
    
 //   Unit 19------------------
//  document.querySelector('.one').onclick = function(event) {
//   console.log(event.originalTarget.className )
//    console.log('click')
//  }
 
//  document.querySelector('.two').onclick = function() {
//   console.log('click2')
// }
// document.querySelector('.two').ondblclick = function () {
//   console.log('double')
// }
// document.querySelector('.two').oncontextmenu = function () {
//   console.log('right button')
//   return false
// }

//   Unit 19   Task 1------------------
//  let out = document.querySelector('.out')
// document.querySelector('.div-1').onclick = function(event) {
//    out.innerText =  event.srcElement.innerText   
  
//  }

// Task 2------------------//
//  document.querySelector('.div-2').onclick = function(event) {
//   out.innerText = event.altKey  
//   console.log(event.altKey  )
  
//   }

  // Task 3------------------//

//  let div3 =  document.querySelector('.div-3')
// let w = 50


//   div3.onclick = function(event) {
//     w +=  5
//     document.querySelector('.div-3').style.width = w + 'px'  
//     console.log(w)
//   }
 
// Task 4------------------//

//  let div3 =  document.querySelector('.div-3')
//  div3.ondblclick = function(event) {
//       out.textContent = div3.innerHTML
//     }


// Task 5------------------//

//  let div3 =  document.querySelector('.div-3')
//  div3.ondblclick = function(event) {
//       div3.classList.toggle('active');
//     }

// Task 6------------------//
// let div3 =  document.querySelector('.div-3')
// let ul = document.querySelector('ul')
//  console.log(ul)
// div3.ondblclick = function(event) {
//   ul.classList.toggle('hide');
  
//    };

// Task 7------------------//
// let div3 =  document.querySelector('.div-3')
 
 
// div3.oncontextmenu = function(event) {
//   // ul.classList.toggle('hide');
//    div3.classList.toggle('active');
//    return false
//    };
    
// Task 8------------------//
// let ch8 =  document.querySelector('input')
// console.log(ch8)
//     ch8.onchange = function  () {
//        ch8.oncontextmenu = function () {
//       if ( ch8.checked === true ) {
//           return false
//         }
//       }
//     }
      
// Task 9------------------//
       
   
//     let a = ['one',1, 2,'two' ]
//     a.push('hi', 'foo', 'bar')  
//  out.textContent = a
// console.log(out.innerHTML)
 

    //  Unit 20 -----------

    // document.querySelector('.i1').onkeypress = function ( event) {
    //   console.log('charkode: ' + event.charCode)
    // }
 
    // document.querySelector('.i1').onkeydown = function ( event) {
    //   console.log('Keydown: ' + event.charCode)
    //   console.log('Keydown: ' + event.code)
    // }



  //  Unit 20 -----------
    // Task 1------------------//
    // let out = document.querySelector('.out-1')
    
    // document.querySelector('.i-1').onkeypress = function (event ){
    //    out.innerHTML+= event.key
    //   return  out.innerHTML
    
    // }

    // Task 2 ------------------//
    // let out = document.querySelector('.out-2')
    
    // document.querySelector('.i-2').onkeypress = function (event ){ 
    //   out.innerHTML= event.charCode
    //   return  event.charCode
    // }

    // Task 3 ------------------//
    // let out = document.querySelector('.out-3')
    //   document.querySelector('.i-3').onkeypress = function (event ){ 
    //       event.charCode >=48 && event.charCode <=57  ? out.innerHTML= true:  out.innerHTML= false
    //     }  
         
        
    //  Start -------------------- Event on Android and Iphone
    // let a1 = 0
    // document.querySelector('.block-1').onclick = function () {
    //   a1++
    // document.querySelector('.out-1').innerHTML = 'click ' + a1
    // }


    // let a2 = 0
    // document.querySelector('.block-2').ondblclick = function () {
    //   a2++
    // document.querySelector('.out-2').innerHTML = 'click ' + a2
    // }

    // let a3= 0
    // document.querySelector('.block-3').onmousemove = function () {
    //   a3++
    // document.querySelector('.out-3').innerHTML = 'mouse move ' + a3
    // }

    // let a4= 0
    // document.querySelector('.block-4').onmouseenter = function () {
    //   a4++
    // document.querySelector('.out-4').innerHTML = 'mouse enter ' + a4
    // }
    // let a5= 0
    // document.querySelector('.block-5').onmouseleave = function () {
    //   a5++
    // document.querySelector('.out-5').innerHTML = 'mouseleave ' + a5
    // }

    //  End -------------------- Event on Android and Iphone
    //  Unit 21 -----------
//     document.querySelector('.block-1').addEventListener("touchstart" , myTouch) 
//     document.querySelector('.block-1').addEventListener("touchend" , myTouchEnd) 
//     document.querySelector('.block-2').addEventListener("touchmove" , myTouchMove) 

//     function myTouch (event) {
       
//       document.querySelector('.out-1').innerHTML  = event.touches.length
//       document.querySelector('.out-2').innerHTML += 'work'
//  }
//  function myTouchEnd (event) {
//   document.querySelector('.out-2').innerHTML += 'end'
// }
//  function myTouchMove (event) {
//    event.preventDefault()
//   console.log(event)
//   document.querySelector('.out-2').innerHTML += 'move'
//   return false
// }

//  Unit 21 -----------
// Task 1 -------------
// document.querySelector('.block-1').addEventListener("touchstart" , myTouch) 
// let a = 0
//     function myTouch (event) {
//       document.querySelector('.out-1').innerHTML += 'touch '
      
//         a++
//       document.querySelector('.out-2').innerHTML   = 'touch ' + a
//  }


//  document.querySelector('.block-2').addEventListener("touchstart" , myTouch2)
//  document.querySelector('.block-3').addEventListener("touchstart" , myTouch2)

//  function myTouch2 (event) {
//   document.querySelector('.out-1').innerHTML  = event.target.className
// }
 


//  Unit 22 -----------

// let a = 44
// a = a * 2

// try {
//   document.querySelector('.re').innerHTML = a
// }
// catch(err) {
//   console.log(err)
//   console.log('If you are seeing this, you have a mistake in your code')
// }
// finally {
//   console.log('The programm is working')
// }

// console.log(a)
// t1()
// function t1() {
//   console.log('Hello')


// }
//  Unit 22 -----------
// Task 1 -------------.

// try {
//   document.querySelector('.o7').innerHTML = 'we do not have any mistakes'
// }
// catch(err) {
  
//     document.querySelector('.o1').innerHTML = err
//   }
   
   
//  Unit 23 -----------
// localStorage.setItem('data', 5)
// console.log(localStorage.getItem('data'))
// const a = [3,4,5]
 
// localStorage.setItem('a',JSON.stringify(a))
// let b = localStorage.getItem('a')
//  b = JSON.parse(b)
//  console.log(b)

//  const c =  {
//    hello: 5,
//    k: 2,
//    4: 'hi'
//  }
//  localStorage.setItem('c',JSON.stringify(c))
// let d = localStorage.getItem('c')
//  d = JSON.parse(d)
//  console.log(d)


//  Unit 23 -----------
// Task 1


// let arr = [7,6,5]

// document.querySelector('button').onclick =  function t1 () {
//   localStorage.setItem('a2',JSON.stringify(arr) )
//  let b = localStorage.getItem('a2')
//  b = JSON.parse(b)
// document.querySelector('.out-7').innerHTML =` Key 'a2': <br> ${b}`
// }
  
 
//  let a = 0
// for ( i = 5; i>0; i--) {
//      count = 0
//      let countx = '*'
// if (i % 2 !== 0) {
//   console.log(i)
// } else {
//   countx += '*'
//     console.log(countx)
// }
   
//   }


// let q = 5 
//  let out = document.querySelector('.out')
// for (let i= 5; i>0; i-- ) {
//    for(let k=5;  k>0; k--) {
//      if (   k>=q  && q % 2 !==0) {
//       out.innerHTML +=` ${q} `
//      } 
//      else if (q % 2 ==0 && k>=q  ) {
//        out.innerHTML += ` x `
//      } 
//   }
//   q--
//   out.innerHTML += '<br>'
// } 
 
// unit 25 ---------------------

//  Greate request
// let xhttp = new XMLHttpRequest()
// let a = 0
// // create function which monitors state of request
// xhttp.onreadystatechange = function(event) {
//   if (this.readyState == 4  && this.status == 200) {
//     myFunction(this.responseText)
//   }

// }

// xhttp.open("GET","http://getpost.itgid.info/index2.php", true );
// xhttp.send()

// //  call function which  show dat request
// function myFunction (data) {
//   a= data
//   console.log(data)
// }


// let xhttp2 = new XMLHttpRequest()
// xhttp2.onreadystatechange = function() {
//   if (this.readyState == 4  && this.status == 200) {
//     myFunction2(this.responseText)
//   }
// }

// xhttp2.open("POST","http://getpost.itgid.info/index2.php", true );
// xhttp2.setRequestHeader("content-type", "application/x-www-form-urlencoded")
// xhttp2.send('auth=1&action=1')
// function myFunction2 (data) {
//   console.log('POST')
//   a= data
//   console.log(data)
// }


// unit 25------ Task 1 


// let xtthp = new XMLHttpRequest()

// xtthp.onreadystatechange = function() {
//   if(this.readyState == 4 && this.status == 200) {
//     myFunction(this.responseText)
//   }
// }
// function myFunction (data) {
//   a= data
//   console.log(data)
// }
// let r = 2
// xtthp.open("Get",`http://getpost.itgid.info/index${r}.php?action=3&num1=1&num2=10`, true );
// xtthp.send()



// unit 26------ 
//  Fetch  красивая оболочка для запросов

// fetch("http://getpost.itgid.info/index2.php")
// .then(data => {
//   // console.log(data.text())
//   // data.text().then(data2 =>{
//   //   console.log(data2)} )
//   return data.text()

// })
// .then(data => {
// console.log(data)
// })


// unit 27------ 
//  Promise

// fetch("http://getpost.itgid.info/index2.php")
// .then(data => {
//   console.log(data.status)
//   // data.text().then(data2 =>{
//   //   console.log(data2)} )
//   return data.text()

// })
// .then(data => {
// console.log(data)
// })
// let a = new Promise((resolve,reject) => {
//   fetch("http://getpost.itgid.info/index2.php")
// .then(data =>resolve( data.text()))
// })

// let b = new Promise((resolve,reject) => {
//   fetch("http://getpost.itgid.info/index2.php?name=alex")
// .then(data =>resolve( data.text()))
// })

// // Запускает промисы только после обработки предыдущих промисов
// Promise.all([a,b]).then(value => {
//   console.log(value)
// })


// a.then(data => {
//   console.log(data)
// })

// b.then(data => {
//   console.log(data)
// })

// Unit 28
// function myAlert(a,c,d) {
   
//   let b = `<p class ="${c}">${a}</p>`
//   document.querySelector(d).innerHTML = b
// }
// myAlert('hi','orange', '.test')
// myAlert('YO','orange', '.test2')

class Alert {
  constructor(a,c,d) {
    this.message = a;
    this.cssClass = c;
    this.out = d;
  }
  showAlert(){
    document.querySelector(this.out).innerHTML = `<p class ="${this.cssClass}
    "><i class="material-icons"> ${this.icon}  </i>${this.message}</p>`
  }
}


// class Alert2 extends Alert {
//   constructor(a,c,d,icon){
//      super(a,c,d)
//      this.icon = icon   //new proper
//   }
//   showIconAlert(){
//     document.querySelector(this.out).innerHTML = `<p class ="${this.cssClass}">${this.message}</p>` 
//   }
//   myAlert(){
//     alert(this.message)
//   }
// }

// let m = new Alert('my message','.orange','.test')
// console.log(m)
// m.showAlert()
// let m2 = new Alert2('my message','.orange','.test','account_balance' )
// console.log(m2)

// Unit 28 
// Task 1  --------------

// class Goods {
//   constructor(a,c) {
//         this.name = a;
//         this.amouth = c;
         
//       }
// }

// let goods = new Goods('bread',12)
// console.log(goods)

// Task 2  --------------

// class Goods {
//     constructor(k,c,d) {
//           this.cssClass = k
//           this.image = d;
//           this.amouth = c;
          
//         }
//         draw(){
//           document.querySelector('.out').innerHTML = `<div class ="${this.cssClass}
//           "><i class="material-icons"> ${this.image}</i> ${this.amouth}</div>`

//         }
//   }
//   let p = new Goods('tree', 10,'tree-icon')
//  p.draw()
//  console.log(p)

// Unit 30 Рекурсия

// let a = 0
// function rec() {
//    a = a + 2
//    console.log(a)
//  if ( a > 99) {
//    return a
//   }
//    rec()
// }

// rec()
 
// let offset = 0
// function move(){
//   offset +=10
//   document.querySelector('.test').style.left = offset + 'px'
//    if (offset > 200  ) {
//      return true
//    }
//    setTimeout(move,200)
  
// }
// document.querySelector('button').onclick = move

// Unit 29 Замыкани
// function t1(){
//    let a = 0
//    return function (){
//     a = a + 1
//      return a 
//    }
// }

// let b = t1()
// let c =t1()
// console.log(b())
// console.log(b())
// console.log(b())
// console.log(c())
// console.log(c())
// console.log(c())



// function pallindrom(str) {
//   str = str.toLowerCase();
//   // let str2 = str.split('');
//   //  str2 =  str2.reverse()
//   //  str2 = str2.join('')
//   //  if (str == str2) return true
//   //  else return  false
//   str = str.reverse()
//   //  return str == str.split('').reverse().join('')
//   return str
// }

// console.log(pallindrom('abba'));

// function reverse(str)  {
//     let ad = ""
//     for ( let i = str.length - 1; i>=0; i-- ) {
//      ad+=str[i]
//     }
//    return ad == str
  
// }

// console.log(reverse('hello'))
 