{
//GLOBAL SCOPE
let message = 'hi'; // <=== global variable

function sayHi() {
    //BLOCK SCOPE
    let message = 'Hello'; //<=== local variable
    console.log(`##${message}`);
}
    sayHi();
    console.log(message);
}

//******************************************** 
//variable : identifier
//function : procedure

// global variable ใช้เป็น const ได้ กันการเปลี่ยนแปลงค่า

const satellite = 'The Moon';
let stars = 'North Star';
const galaxy = 'The Milky Way';

function callMyNightSky(stars) {
    let stars = 'Sirius'
 return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
}
console.log(callMyNightSky(stars)); 

console.log(stars);


//********************************************  
//function declaration

//HOISTING แขวน, ทำให้มันอยู่ข้างบน จะอยู่ใน Function
sayHi()

function sayHi(){
    console.log('Hi');
}