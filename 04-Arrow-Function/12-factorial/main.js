// input-check number
// logic n! = n * (n-1) * (n-2)... = n * (n-i++)
// output-result

//V.1
// const factorial = (n) => {
//     if(n === 0 || n === 1) return 1;
//     else return n * factorial(n-1);
// }

//V.2 refactor
const factorial = n => (n === 0 || n === 1) ? 1 : n * factorial(n-1); 

console.log(factorial(4))
console.log(factorial(10)) 