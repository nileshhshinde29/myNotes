/* 

let a = [];
let b = [];

console.log(a == b)
console.log(a === b)
//-------------------

let a= [];
let b=a;
console.log(a==b)
console.log(a===b)

//---------------------


*/
/* 
console.log(typeOf NaN);   NaN is special type of number
*/
/* 

let data= 10- -10;  ( --=+ )
console.log(data);

*/
/* 

const set= new Set([1,1,2,3,3,4,5])
console.log(set)


*/
/* 
let data={name:'nilesh'}
console.log(delete data.name);
console.log(data);
*/
/* 

let data= {name:'nielsh'}
console.log(delete data);

*/
/* 

const data=['Nilesh', "shinde"]
const [y]=data
console.log(y);
*/
/* 
const data=['Nilesh', "shinde" ,"hanmant"]
const [,y]=data
console.log(y);

*/
/* 

const res= false || {} || null
console.log(res)

*/
/* 
const res = null || false || ""
console.log(res);

*/

/* 

let person ={name: "Nilesh"}

Object.seal(person)
person.age=20
console.log(person);
*/

/* 
console.log('3' + 3)
console.log(3 + '3')
console.log('3' - 3)
console.log('3' - '3')
console.log('3'+  +3)
console.log(3+ +'3'+ '3')
console.log("3"- -3)
console.log(3- -'3')
*/
/* 
console.log(3 * 3)
console.log(3 ** 3)
*/

/* 

let A10=20;
let 10 = 20 
let 10A = 20;
hint : in js variable name is can not start with number or it can not be number. 

*/
/* 
let a="like";
let b = 'like';
console.log(a===b);

*/

/* 
let a= 1;
let b= 1;
let c==2


console.log(--c === a);
console.log(a === b === --c);
console.log(true == 1);
console.log(true === 1);


*/

/* 
console.log(3*3)
console.log(3**3)
console.log(3***3)
*/

/* 
let for= 100;

*/
/* 
for(var i=0; i<3; i++){
   setTimeout(()=> console.log(1), 1000)
}

for(let i=0; i<3; i++){
   setTimeout(()=> console.log(1), 1000)
}
*/

/* 
console.log(+true);
console.log(typeof +true);

*/
/* 
console.log(!"nilesh");

*/

/* 
let c = {name:"nilesh"}
let d;
d= c;
console.log(d.name)
c.name = "anil"
console.log(d.name)

*/

/* 
var x= 10;
var x= 11;
console.log(x)

*/

/* 
let a= 30;
let a= 33
console.log(a)
*/

/* 
let b = 3
let a= new  Number(3)

console.log(typeof(a))
console.log(a == b)
console.log(a === b)
//----
let c = Number(10)
console.log(typeof c)
*/

/* 
b={name:"hi"}

console.log(b)
*/

/* 
let a= 0
console.log(a++) //0                                                            
console.log(++a) //2                                                            
console.log(a)   //2                                                            

*/

/* 
function getAge(...arg){
    console.log(typeof arg)
}

getAge(21)

hint: type of array is object;
*/

/* 
 function Age(){
 "use strict"
       age=21 ; // by default var
       console.log(age);
 }
 Age()

*/

/* 
const a= eval('10*10+5')
console.log(a);

*/
/* 
let a = {1:'nilesh'}
console.log(a.hasOwnProperty("1"))
console.log(a.hasOwnProperty(1))
*/

/* 
let obj= {
    a: 'one',
    b:'two',
    a:'three'
}
console.log(obj);
*/

/* 
for(let i=0; i<5; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}
o/p= 0,1,2,4

*/
/* 
   <div onClick={()=>console.log('first div')}>
      <div onClick={()=>console.log('second div')}>
           <button onClick={()=>console.log('button')}>Button </button>
       </div>
   </div>

   o/p => button second first

*/
/* 

 <div onClick={()=>alert('first div')}>
      <div onClick={()=>alert('second div')}>
           <button onClick={()=>alert('button')}>Button </button>
       </div>
</div>

o/p => button second first


*/

/* 

function sayHi(){
    return (()=>0)() // if not call here it will return function, we called here means it will return 0 i.e. number
}

console.log(sayHi())
console.log(typeof sayHi())

*/

/* 
console.log(typeof typeof 1); // string 

*/

/* 
const number = [1,2,3]
number[6]=11
console.log(number);

*/
/* 
  
  const number = [1,2,3]
  number[5]= number
  console.log(number);
  
  // infinite nested array :check in web console
*/

/* 

// 80 Everything in JavaScript is either a...
// A: primitive or object  *ans 
// B: function or object
// C: trick question! only objects
// D: number or object

*/

/* 
console.log(!!null);
console.log(!!"");
console.log(!!1);

*//* 

console.log(setInterval(()=>console.log('hii'),1000));
console.log(setInterval(()=>console.log('hii'),1000));
console.log(setInterval(()=>console.log('hii'),1000));

*/

/* 
console.log([..."nilesh"]);

*/

/* 
 const firstPromise  = new Promise ((res, rej) => {
    setTimeout (res, 500, 'one');
  });

 const secondPromise = new Promise ((res, rej) => {
    setTimeout(res, 100, 'two');
  });

 Promise.race([firstPromise, secondPromise]).then(res =>console.log(res));

hint: Promise.race is return value of first resolved promise

*/

/* 
let person ={name:'peter'}

const member= [person]
person = null
console.log(member);

*/
/* 

 /* 
 const person ={name:'Peter', lastname:'Parker'}

    for(const item in person){
        console.log(item)
    }
 */
/*
let data= 3 + 3 +"3" 

console.log(typeof data)
console.log(typeof 3+ 3 +"3")
console.log(typeof 3+ 3+ +"3")
console.log(typeof (3+ 3+ +"3"))
 
*/

/* 
let data= [1, 2, 3].map(num => {
if (typeof num === 'number') return; I
return num * 2;
});
console.warn (data);

*/

/* 

function getInfo(member) {
    member.name = 'Anil';
}

const person = { name: 'Sarah' };

getInfo(person);

console.log(person); // Anil
*/

/* 

function Car() {
    this.make = 'tata';
    return { make: 'Kia' };.
} I

const myCar = new Car();
console.log (myCar.make);

*/

/* 
(()) => {
    let x = (y = 10);
})();
console.log(typeof x); I
*/

/* 

(() => {
    let x=y = (y = 10); //if not given data type, y is acting as a var
})();
console.log(typeof y); 

*/
/* 

(()=>{
    let x= y=10
})();

(()=>{
    let x= y=20
})();

console.log(y);
*/

/* 
let x=100;
(()=>{
    var x=20;
})()

console.log(x);

*/

/* 
console.log(!true - true) // -1
console.log(true + +"10"); // 11

    */

/* 
let a= "hello, how are you"

console.log(a.substring(0,5)) // get substring
console.log(a.substring(1,a.length)) // remove first letter
console.log(a.substring(0,a.length-1)) // remove last letter
console.log(a.split('o')[0]) // remove string after "o"
*/