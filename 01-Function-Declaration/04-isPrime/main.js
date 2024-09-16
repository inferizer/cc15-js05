function checkPrimeNum (n){
    let isPrime = true;
    for(i = 2; i < n; i++) {
        if(n % i == 0)
        isPrime = false;
        break;
    }
    if(isPrime == true) alert(`number ${i} is prime number`);
    else alert(`number ${i} is not prime number`);
}

let n = prompt('enter number want to check:') || '';
checkPrimeNum(n);