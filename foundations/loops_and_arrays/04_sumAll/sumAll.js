const sumAll = function(a,b) {
    
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR'
    }


    if(a < 0|| b < 0){
        return 'ERROR';
    }
    
    sum = 0;
    
    if( a < b ){
         for(i = a; i <= b; i++){
            sum += i
        }
        return sum;
    }

    else if(b < a ){
        for(i = b; i <= a; i++){
            sum += i
        }
        return sum;
    }
   
};

// Do not edit below this line
module.exports = sumAll;
