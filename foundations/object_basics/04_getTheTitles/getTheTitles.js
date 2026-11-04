const getTheTitles = function(books) {
    retval = [];
    for (let book of books){
        retval.push(book.title);
    }
    return retval;
};

// Do not edit below this line
module.exports = getTheTitles;
