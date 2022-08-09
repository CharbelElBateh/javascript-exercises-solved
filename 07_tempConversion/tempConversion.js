const ftoc = function(i) {
  return Math.ceil(((i-32)*(5/9)) *10) /10
};

const ctof = function(i) {
  return Math.ceil((i * 9/5 +32) *10) /10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
