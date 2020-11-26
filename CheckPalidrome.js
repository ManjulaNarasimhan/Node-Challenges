
function isPalindrome(str) {
    console.log(str);
    console.log(str. replace(/[ ,.]/g, "").toLowerCase());
    return str === str. replace(/[ ,.]/g, "").toLowerCase().split('').reverse().join('');
    
};

console.log(isPalindrome("A man a plan, a canal, Panama")); 
 