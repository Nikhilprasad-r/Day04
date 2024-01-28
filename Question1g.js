function duplicateRemover(array){
    return [...new Set(array)];
}
console.log(duplicateRemover(array));