const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	if(arr.length === 0){
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum
};

const multiply = function(arr) {
  	let m = 1;
  for (e of arr){
    m *= e;
  }
  return m;
};

const power = function(b,e) {
	return b ** e
};

const factorial = function(f) {
  let retval = 1;
  let loopVar = f;
  for(let i = 0; i < f; i++){
    if(loopVar === 0){
      continue;
    }
    retval *= loopVar
    loopVar--;
  }
  return retval;
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
