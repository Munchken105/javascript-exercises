const palindromes = function (str) {
    let fstr = str.toLowerCase().replace(/\W/g,"");
    return (fstr === reverseString(fstr));
};

function reverseString(str){
    return str.split('').reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;
