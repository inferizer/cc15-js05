/* 
### การเขียน function มี 2 แบบหลักๆ

1. Function Declaration / Name Function
2. Function Expression / Anonymous Function
*/

/* Function Declaration
1.Define Function => name, input
2.Call
*/

// Define
function sayHi(name, lastName) {
    console.log(`${name} ${lastName}`);
}

// Call
sayHi();
// Parameter
sayHi(`Bear`, `Hug`)

// RETURN VALUE : result from finish fuction (return value, FN result)

function add(x, y) {
    let result = x + y;
    return result;
}

console.log(11 === add(5, 6)); // DONE : add(5,6) => result === 11

let r = add(5, 6); // reuseable result
console.log(r);

console.log(add(5, 6)); // one time use

function isEven(n) {
    if (n % 2 == 0) {
        return true; // << stop at return
        console.log(n) // not good //code after return not run
    } else {
        return false;
    }
    /////////////////Refactor-no else//////////////////
    if (n % 2 == 0) {
        return true;
    } return false;

    //////////////Refactor-no if...else//////////////
    return n % 2 == 0;
}

console.log(isEven(5))
console.log(isEven(10))

//Checkpoint #1
// - Declar : FN 
// - Parameter : input
// - Call : Run FN
// - Return : Result

// FN EXPRESSION

let a = 5 * 2 + 7;
// variable = expression
/*
expression
- single value : 7
- combine expression : 7 + 2
- FN result : add(7,2)
*/

// FORMAT : variable = FN (FN EXPRESSION)
// FN EXPRESSON : Assign FN to variable 
let myFunc = add;
console.log(myFunc(5, 2));

let z = console.log;
z('HI');

// Anonymous FN

//SYNTAX : FN EXPRESSION
// Assign anonymous FN to variable
// no Hoisting // must declar before call
const sayHello = function (name) {
    console.log('Hi' + name);
}

sayHello(`EXPRESSION`)

//1.function add () {}
//2A. let add = function () {}
//2B. let add = () => {}

// ARROW FN
const minus = (a, b) => {
    return a - b;
}
// ARROW FN one line , function no complex

const minusRE = function (a,b){
    return a-b;
}
const minusRE1 = (a, b) => a - b;

const minusTwo = (a) => a - 2;
const minusTwoRE = a => a - 2;