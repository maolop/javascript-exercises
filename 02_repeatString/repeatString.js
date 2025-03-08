const repeatString = function(string, repeats) {
    if (repeats < 0)
        return "ERROR"

    let newString = ""
    while (repeats > 0) {
        newString += string
        repeats--
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
