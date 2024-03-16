const fibonacci = function(member) {
    let seq = [1];

    for (let i = 1; i <=8; i++) {
        if (seq[i-2] === undefined){
            seq[i] = seq[i-1] + 0;
        } else {
        seq[i] = seq[i-1] + seq[i-2];
        }
    }

    return seq[member-1];
};

// Do not edit below this line
module.exports = fibonacci;
