const repeatString = function( s, i) {
    if(i<0){
        return "ERROR";
    }else{
        let s1="";
        for(n=0; n<i; n++){
            s1 += s;
        }
        return s1;
    }
};

// Do not edit below this line
module.exports = repeatString;
