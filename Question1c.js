
var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]; // sample input

const sumOfArray = (function (array){
    var sum=0;
    for(let i of array){
        sum += i;
        }
    return sum;
})(array);// IIFE implemented here
console.log(sumOfArray);// output: 105