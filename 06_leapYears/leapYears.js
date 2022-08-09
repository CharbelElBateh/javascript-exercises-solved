const leapYears = function(i) {
    return (i%4 == 0 ^ 
        (i%100===0 && i%400!==0)?true:false
        )?true:false;
};

// Do not edit below this line
module.exports = leapYears;
