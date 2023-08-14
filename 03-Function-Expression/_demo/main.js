
console.log('Anonymous')

// #1 : Name fn, FN Declaration
// funtion add () {}

// #2 : Anonymous function

//   (function (x, y) {
//   console.log(x + y);
// })(10, 5)

// console.log(
//   (function (x, y) {
//   console.log(x + y);
// })(10, 5)
// )

// let a = (function (x, y){
//     return x + y;
// }) (10, 7);
// console.log(a);
  
//VARIABLE = EXPRESSION
let myVar = ((5 * 2 * 20) /2) % 7;

//VARIABLE = FN (FN == EXPRESSION การ assign function ให้ตัวแปรแม้ว่าจะมีชื่อหรือไม่มีชื่อก้ตาม)
//ASSIGN anonymous FN to variable
let myFunc = (function (x,y) {
  return x + y;
})
console.log(myFunc(10,20));

//ASSIGN named FN to variable
// const a = console.log;
// a('hi');

//### ANONYM (MODERN : ARROW SYNTAX)

let a = function (x) {return x ** 2;};
// Shortest
let z = x => x + 2 // one parameter
let b = (x,y) => x + y;
//(input) // => return

// B-Bracket
let c= (x,y) =>{
  let result = x + y;
  return result;
};

console.log(a(3));
console.log(b(3,4));
console.log(c(3,4));
console.log('number'+ z(5));