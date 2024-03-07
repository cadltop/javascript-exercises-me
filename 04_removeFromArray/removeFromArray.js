const removeFromArray = function(items, ...values) {
    /*
    if (items.includes(...values)) {
        const newArray = items.filter(getValue => !values.includes(getValue));
        return newArray; 
    } else {
        return items;
    }
    */

    const newArr = [];
    for (const value of values) {
        if (items.includes(value)){
            newArr.push(value);
        }
    }
    return items.filter(getValue => !newArr.includes(getValue));
};

// Do not edit below this line
module.exports = removeFromArray;
