/* 
Return all the palindromes in an array using anonymous function & IIFE
*/


var array = ["nitin","nikhil","rotator","radar","border"];  //sample input

const PalindromeS = (function(array){
    let PalindromArray=[];
    for(let i of array){
        if(palindromeCheck(i))
        {
            PalindromArray.push(i);
        }
    }
    return PalindromArray;
})(array);// IIFE implemented here

function palindromeCheck(string){
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
}
console.log(PalindromeS);// output:[ 'nitin', 'rotator', 'radar' ]
