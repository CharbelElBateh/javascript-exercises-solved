const fibonacci = function(a) {
    if(a < 0 ) return "OOPS";
    if(a == 0) return 0;
    if(a == 1 || a == 2) return 1;
    let answer = fibonacci(a-1) + fibonacci(a-2);
    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
