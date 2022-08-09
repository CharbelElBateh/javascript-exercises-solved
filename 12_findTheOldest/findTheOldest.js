const findTheOldest = function(a) {
    let years = [];
    a.forEach(person => {
        if(person.yearOfDeath == undefined){
            let date = new Date().getFullYear();
            years.push(date-person.yearOfBirth);  
        }else{
        years.push(person.yearOfDeath - person.yearOfBirth);
        }
    });
    return a[findIndexOfMax(years)];
};

const findIndexOfMax = function (a){
    let runningMax = a[0];
    for(let i =1; i<a.length; i++){
        if(runningMax < a[i])
            runningMax = a[i];
    }
    return a.indexOf(runningMax);
}
// Do not edit below this line
module.exports = findTheOldest;
