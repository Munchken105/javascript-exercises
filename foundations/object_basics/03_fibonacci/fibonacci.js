const fibonacci = function(x) {
    if(x <= 0 || x === NaN || !Number.isInteger(x)){
        return "OOPS";
    }
    return calcFib(x);
};

function calcFib(x){
    let lastNumber = 0;
    let currNumber = 1;
    let retval = 0;
    for (let i = 1; i < x; i++){
        retval = lastNumber + currNumber;
        lastNumber = currNumber;
        currNumber = retval;
    }
    return retval;
}

// Do not edit below this line
module.exports = fibonacci;
