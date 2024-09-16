//find max
function max(num1,num2 = 0,num3 = 0,num4 = 0){
    if (num1 > num2 && num1 > num3 && num1 > num4) console.log(maxNum=num1)
    else if (num2 > num1 && num2 > num3 && num2 > num4) console.log(maxNum=num2)
    else if (num3 > num1 && num3 > num2 && num3 > num4) console.log(maxNum=num3)
    else if (num4 > num1 && num4 > num2 && num4 > num3) console.log(maxNum=num4)
    else console.log(maxNum = NaN)
}

max(); // NaN
max(2); // 2
max(3, 1); // 3
max(7, 3, 9, 2); // 9

//find min

function min(num1,num2 = 0){
    if (num1 < num2) console.log(minNum=num1)
    else if (num2 < num1) console.log(minNum=num2)
    else console.log(minNum = NaN)
}

min(); // Nan
min(2); // 0
min(3,1); // 1
min(7,3); // 3
