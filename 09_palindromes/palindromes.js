const palindromes = function (a) {
let b = a.replace(/[!"#$%&'()*+,-. /:;<=>?@[\]^_`{|}~]/g , '');
let palindrome = true;
for (let i = 0; i < b.length/2 ; i++) {
    if (b.charAt(i).toLowerCase() !== b.charAt(b.length - 1 - i).toLowerCase())
        palindrome = false;
}
return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
