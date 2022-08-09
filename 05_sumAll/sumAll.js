const sumAll = function(i, j) {
    let sum = 0;
    if( !Number.isInteger(i)
    || !Number.isInteger(j)
    || i<0 || j<0)
        return "ERROR";
    else if(i<j)
        for(let a = i; a<=j; a++){
            sum +=a;
        }
    else if(j<i)
        for(let a = j; a<=i; a++){
            sum +=a;
        }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
