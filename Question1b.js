/* 
Convert all the strings to title caps in a string array
 using anonymous function & IIFE
*/
var array =["nikhil","is","learning","full","stack"]; //input

const capitalizing = (function(array){
    let op=[];
for(let i of array){
    op.push(i[0].toUpperCase()+i.slice(1));
}
    return op;
})(array);// IIFE implemented here

console.log(capitalizing);// output: [ 'Nikhil', 'Is', 'Learning', 'Full', 'Stack' ]


