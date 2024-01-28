const capitalizing = (array) => {
    let op=[];
for(let i of array){
    op.push(i[0].toUpperCase()+i.slice(1));
}
    console.log(...op);
};
capitalizing(array);