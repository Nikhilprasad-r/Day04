// Convert all the strings to title caps in a string array using arrow function

var array =["nikhil","is","learning","full","stack"]; //input
const capitalizing = (array) => {
    let op=[];
for(let i of array){
    op.push(i[0].toUpperCase()+i.slice(1));
}
    return op;
};
console.log(capitalizing(array));// output: [ 'Nikhil', 'Is', 'Learning', 'Full', 'Stack' ]