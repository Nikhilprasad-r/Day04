function medianOfArrays(array1,array2){
    let fullArray = array1.concat(array2).sort((a,b)=>a-b);
    
    if(fullArray.length % 2===0){
        let median = (fullArray[fullArray.length/2 - 1]+ fullArray[fullArray.length/2])/2;
        return median;
    }
    return fullArray[Math.floor(fullArray.length/2)];
}

console.log(medianOfArrays(array1,array2));