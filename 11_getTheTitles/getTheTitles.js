const getTheTitles = function(a) {
    let books = [];
    a.forEach(book => {
        books.push(book.title);
    });
    return books;
};

// Do not edit below this line
module.exports = getTheTitles;
