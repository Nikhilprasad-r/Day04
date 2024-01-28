function oddFinder(array){
    let oddArray =[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0)
        oddArray.push(array[i]);

    }
    console.log(...oddArray);
}

oddFinder(inpu);