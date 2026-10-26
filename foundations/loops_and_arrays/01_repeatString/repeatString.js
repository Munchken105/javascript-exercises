const repeatString = function(word,time) {
    if(parseInt(word) != NaN){
          if (parseInt(word) < 0){
        return 'ERROR'
        }
    }

    og_word = word;
    for (let i = 1 ; i < time ; i++){
        word += og_word;
    }

    return word;
};

// Do not edit below this line
module.exports = repeatString;
