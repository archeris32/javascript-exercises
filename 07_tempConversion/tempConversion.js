const ftoc = function(temp) {
    let ctemp =0 ;
    ctemp=(temp-32)*(5/9)
    return Math.ceil( ctemp * 10 ) / 10


};

const ctof = function(temp) {
  let ftemp=0;
  ftemp=temp *(9/5)+32
  return Math.ceil( ftemp * 10 ) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
