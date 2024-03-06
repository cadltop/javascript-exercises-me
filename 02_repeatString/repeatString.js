
let string, num;

const repeatString = function(string, num) {
    if (num > 0) {
        let string2 = string;
        for (i = 1; i < num; i++) {
            string2 += string;
        }
        return string2;
    } else if (num === 0){
        let string2 = "";
        return string2;
    } else {
        let string2 = "ERROR";
        return string2;
    }
};

// Do not edit below this line
module.exports = repeatString;
