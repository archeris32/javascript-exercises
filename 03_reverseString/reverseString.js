const reverseString = function(str) {
    let word =""
    for (let i =  str.length-1; i >=0; i--) {
        word +=str[i]
      }
    return word
};

// Do not edit below this line
module.exports = reverseString;
