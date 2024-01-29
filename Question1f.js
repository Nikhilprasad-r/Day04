
var array1 = [1,2,4,6,7,9];      
var array2 = [11,14,15,16,17,19];  // sample input

const medianOfArrays = (function (array1,array2){
    let fullArray = array1.concat(array2).sort((a,b)=>a-b);
    
    if(fullArray.length % 2===0){
        let median = (fullArray[fullArray.length/2 - 1]+ fullArray[fullArray.length/2])/2;
        return median;
    }
    return fullArray[Math.floor(fullArray.length/2)];
})(array1,array2);// IIFE implemented here

console.log(medianOfArrays); //output: 10