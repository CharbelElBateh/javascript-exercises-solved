const removeFromArray = function(s , ...param) {
    for(let i = 0; i<s.length; i++){
        for(let j = 0; j<param.length; j++){
            if(s[i]===param[j]){
                s.splice(i, 1);
                i=0;
            }
        }
    }
    
    return s;
};

// Do not edit below this line
module.exports = removeFromArray;
