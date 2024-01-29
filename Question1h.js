/* 
Rotate an array by k times using anonymous function & IIFE
*/

var array =["nikhil","is","learning","full","stack"]; //input
var k = 3;// input of number of times to be rotated

const rotateArray = (function (array,rotations){

    let newArray = array.slice(rotations).concat(array.slice(0, rotations)); 
    return newArray;
})(array,k);// IIFE implemented here
console.log(rotateArray);// [ 'full', 'stack', 'nikhil', 'is', 'learning' ]