const fibonacci = function(a) {
    let n1 = 0, n2 = 1, nextTerm, count=0;
    let array = [0,1]
    for (let i = 0; i <= a; i++) {
    
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        array.push(nextTerm) 
        
    }
    if (a < 0){
        return "OOPS"
    }
    else{
    
   return array[a]
}};


// Do not edit below this line
module.exports = fibonacci;
