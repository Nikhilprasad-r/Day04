var array = ["nitin","nikhil","rotator","radar","border"];  //sample input


const PalindromeS = (array) =>{
    let PalindromArray=[];
    for(let i of array){
        if(palindromeCheck(i))
        {
            PalindromArray.push(i);
        }
    }
    return PalindromArray;
};

const palindromeCheck = (string)=>{
    let reverseString = string.split("");
    reverseString.reverse();
    if(string === reverseString.join(""))
    {
        return true;
    }
    else
    {
        return false;
    }
};
console.log(PalindromeS(array));// output:[ 'nitin', 'rotator', 'radar' ]

