/* 
Remove duplicates from an array using anonymous function & IIFE
*/
var array = ["nikhil","is","learning","full","stack","nikhil","is","student","of","Guvi"]; // sample input
const duplicateRemover = (function (array){
    return [...new Set(array)];
})(array);// IIFE implemented here
console.log(duplicateRemover);//output:['nikhil','is','learning', 'full','stack','student','of','Guvi']