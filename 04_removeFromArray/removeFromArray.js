const removeFromArray = function(array, ...toRemove) {
    let newArray = []
    for (item of array) {
        if (!toRemove.includes(item))
            newArray.push(item)
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
