const removeFromArray = function(array,element) {
    
    for (let i=0;i<array.length-1;i++){
        if(element == array[i]){
            array.splice(i,1)
        }
    }
    return array
    
    



};

// Do not edit below this line
module.exports = removeFromArray;
