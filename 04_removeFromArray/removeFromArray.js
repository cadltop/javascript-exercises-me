const removeFromArray = function(items, value) {
    if (items.includes(value)) {
        function getValue(item) {
            return item !== value;
        } 
        const newArray = items.filter(getValue);
        return newArray;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
