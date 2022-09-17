const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	return array.reduce(add,0)
};

const multiply = function(array) {
  return array.reduce(function (a,b){return a*b})
};

const power = function(a,b) {
  return Math.pow(a,b)
	
};

const factorial = function(a) {
  let total =1
  if (a==0 || a==1){
    return total
  }
  else{
    for (var i=a; i>=1;i--)
    {
      total=total*i
    }
    return total
  }
	
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
