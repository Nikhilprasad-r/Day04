function rotateArray(array,rotations){

    let newArray = array.slice(rotations).concat(array.slice(0, rotations)); 
    return newArray;
}
console.log(rotateArray(array,k));

