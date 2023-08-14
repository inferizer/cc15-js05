// input-year
// logig year % 4 == 0, year % 400 ==0 and year % 100 != 0
// output-leapYear (check year have 366 days)

// year % 4 == 0 => true
// 1800 => false
// 1900 => false
// 2000 => true

// let leapYear = year => {
//     for (let i = 1; i <= year; i++ ){
//         if (i % 400 == 0) console.log(i)
//         else if (i % 100 == 0) continue 
//         else if (i % 4 == 0) console.log(i)

//     }
// }

// console.log(leapYear(2023))

// let leapYearRe = year => {
//     if (year % 400 == 0) {
//         return true;
//     } else if (year % 100 == 0) {
//         return false;
//     } else if (year % 4 == 0) {
//         return true;
//     }
//     return false;
// }
// console.log(leapYearRe(2023))

// if (year % 100 === 0) {  
    //100,200,300,400
//     return year % 400 == 0;
    //400
// }
// return year % 4 === 0;

let leapYearRe = year => (year % 100 == 0 ? year % 400 == 0 : year % 4 == 0);
 console.log(leapYearRe(2021)) //F
 console.log(leapYearRe(100)) //F
 console.log(leapYearRe(400)) //T
 console.log(leapYearRe(2024)) 
 console.log(leapYearRe(2020)) 


