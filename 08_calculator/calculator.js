const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  let result = 0;
  if(a.length == 0 ) return result;
	for(let i=0; i<a.length; i++){
    result += a[i];
  }
  return result;
};

const multiply = function(a) {
  let result = 1;
  for(let i=0; i<a.length; i++){
    result *= a[i];
  }
  return result;
};

const power = function(a, b) {
  if(a == 1 || a == 0 || b ==1) return a;
  if(b == 0) return 1;
  let result = 1;
  for(let i=0; i<b; i++){
    result *= a;
  }
	return result;
};

const factorial = function(a) {
	if(a == 0) return 1;
  if(a == 1 || a == 2) return a;
  for(let i=a-1; i>0; i--){
    a *=i;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
