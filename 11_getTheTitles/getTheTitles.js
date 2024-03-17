const getTheTitles = function(books) {
    let currentTitle;
    let titles = [];

    for (obj in books) {
        currentTitle = books[obj]['title'];
        titles[obj] = currentTitle;
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
