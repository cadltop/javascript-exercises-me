const palindromes = function (word) {
    let chars = word.split('');
    let newWord = chars.reverse().join('');
    if (word === newWord) {
        return true;
    } else {return false;}
};

// Do not edit below this line
module.exports = palindromes;
