const reverseString = function(str) {
    if(str.length == 0){
        return "";
    }
    
    retval = "";
    for (let i = str.length - 1; i >= 0; i--){
        
        retval += str[i];
    }

    return retval;
};

// Do not edit below this line
module.exports = reverseString;
