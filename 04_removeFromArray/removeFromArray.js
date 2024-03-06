const removeFromArray = function(items, ...values) {
    if (items.includes(...values)) {
        const newArray = items.filter(getValue => !values.includes(getValue));
        return newArray; 
    } else {
        return items;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
