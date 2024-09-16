function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); 
// * function sayHi(age) {
//     if (age < 12) alert('Hi kid');
// } เพราะไม่ได้เรียกใช้ function 


console.log(sayHi(10)); 
// * pop-up (side-effect) = 'Hi kid', return undefined