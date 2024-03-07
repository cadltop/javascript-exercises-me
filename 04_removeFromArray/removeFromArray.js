const removeFromArray = function(items, ...values) {
  
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
