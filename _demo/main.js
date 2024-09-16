// test push,feedback branch 

//defined
function soundOfBird() {
    console.log('welcome')
    console.log('hello')
    for (i = 1; i <= 10; i++){
        console.log('hi')
    }
}
//call function
soundOfBird();

function isPrime(n) {
    let isPrime = true;
    // let n = 5
    for (let divider = 2 ; divider < n;divider++){
        if (n % divider == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime == true) console.log(n);
}

isPrime(17);


//function parameter

function add (x,y) {
    console.log(x + y);
}

add(5,4);

function getCouponByUserId(userId = 'can set defult parameter'){}
// defult use when parameter undifinded


//STAR PATTERN
//dynamic row
//dynamic col

//*
//** 
//*** 
//****

//Prime number
//n (fixed)
//ตัวหาร dynamic => 1 LOOP

//DESIGN FUNC
//1-INPUT  => check number
//2-LOGIC IMPLEMENT ?
//3-OUTPUT => boolean

//ABSTRACTION
//-simple ideas => one idea
//-hiding complexity
//-simple interaction

function addTwo(n){
    let result = n +2;
    return result;// no return = undefined
    // code after return statment not run
    console.log('End calc')
}

let result = addTwo(5);
console.log(result);

//************************************

function isPrime(num){
    for(let d = 2; d < num; d++){
        console.log(d);
        if (num % d == 0){
            return false;
        }
    }
       return true;
}

//************************************

function isPrime(num) {
    for (let d = 2; d < num; d++) {
        // console.log(d);
        if (num % d == 0) {
            return false;
        }
    }

    return true;
}

function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        if (isPrime(n)) {
            console.log(n);
        }
    }
}

printPrime(50);

