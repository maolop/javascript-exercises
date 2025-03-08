const reverseString = function(string) {
    newString = ""
    index = string.length - 1

    while (index >= 0) {
        newString += string[index]
        index--
    }
    return newString

};

// Do not edit below this line
module.exports = reverseString;
