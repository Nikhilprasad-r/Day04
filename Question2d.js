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

console.log(primeNumbers(array));