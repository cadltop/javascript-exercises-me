const fibonacci = function(member) {
    let seq = [1];


    if (member === 0){
        return member;
    } else if (member < 0){
        return "OOPS";
    } else {
        for (let i = 1; i <=26; i++) {
            if (seq[i-2] === undefined){
                seq[i] = seq[i-1] + 0;
            } else {
            seq[i] = seq[i-1] + seq[i-2];
            }
        }
    
        return seq[member-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
