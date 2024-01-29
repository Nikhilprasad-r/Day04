// Print odd numbers in an array using arrow function
var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]; // sample input


const oddFinder = (array)=>{
    let oddArray = [];
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0)
        oddArray.push(array[i]);

    }
    return oddArray;
};

console.log(oddFinder(array));// [1, 3, 5, 7, 9, 11, 13]