
let string, num;

const repeatString = function(string, num) {
    let string2 = string;
    for (i = 1; i < num; i++) {
        string2 += string;
    }
    return string2;
};

// Do not edit below this line
module.exports = repeatString;
