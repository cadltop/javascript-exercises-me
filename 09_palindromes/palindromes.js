const palindromes = function (word) {
    let cleanWord = word.replace(/\W/g,'').toLowerCase();
    cleanWord.toLowerCase();
    let chars = cleanWord.split('');
    let newWord = chars.reverse().join('');
    if (cleanWord === newWord) {
        return true;
    } else {return false;}
};

// Do not edit below this line
module.exports = palindromes;
