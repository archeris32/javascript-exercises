const sumAll = function(x,y) {
    let sum = 0;
    if(!Number.isInteger(x) || !Number.isInteger(y)) return 'ERROR';
    if (x>0 && y>0){ 
        if (x<y){
            for(i=x;i<=y;i++){
                sum+=i;    
            }
        }
        else{
            for(i=y;i<=x;i++){
                sum+=i;  
        }
    }
    
}
    else{
        return 'ERROR';
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
