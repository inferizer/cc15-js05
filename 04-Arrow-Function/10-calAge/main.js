// input-birth year
// logic 
// output-ageDay

// V.1-checkleapYear

function checkleapYear (year) {
    let sumDate = 0;
    if (year % 100 == 0 && year % 400 == 0 && year % 4 == 0 ){
        sumDate += 366;
    } else sumDate += 365;
    return sumDate;
}

console.log(checkleapYear(2024))
console.log(checkleapYear(2020))
console.log(checkleapYear(2000))
console.log(checkleapYear(400))
console.log(checkleapYear(100))

    



