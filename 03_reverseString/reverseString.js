const reverseString = function(s) {
    let reversedS = "";
    for(let i = s.length-1; i>=0; i--){
        reversedS += s.charAt(i);
    }
    return reversedS;
};

// Do not edit below this line
module.exports = reverseString;
