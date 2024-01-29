//Return all the prime numbers in an array using arrow functions

var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]; // sample input

const primeNumbers = (array) =>{
    let primes =[];
for(let i of array ){
    if(primeCheck(i)){
            primes.push(i);
        }   
    }
 return primes;
};

const primeCheck = (i) => {
    if(i<=1) return false;

    for(let j=2;j<i;j++){
        if(i%j==0) return false;
    }
    return true;
};

console.log(primeNumbers(array));// output:[ 2, 3, 5, 7, 11, 13 ]