var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]; // sample input

const sumOfArray = (array) => {
    var sum=0;
    for(let i of array){
        sum += i;
        }
    return sum;
};
console.log(sumOfArray(array));// output: 105