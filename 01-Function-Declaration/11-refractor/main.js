// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm("Did parents allow you?");
//     }
//   }

// V1 : only if, no else
 function checkAge1(age) {
    if (age > 18) { return true;
    }
    return confirm ("Did parents allow you?");
}

// V2 : ? 
function checkAge2(age) {
    (age > 18) ? true : confirm ("Did parents allow you?");
}

// V3 : ||
function checkAge3(age) {
    age > 18 || confirm ("Did parents allow you?");
}

console.log(checkAge1(20))
console.log(checkAge1(17))
console.log(checkAge2(20))
console.log(checkAge2(17))
console.log(checkAge3(20))
console.log(checkAge3(17))
   