function isAlphaChar(char) {
    let charCode = char.charCodeAt(0)

    // Check if character is A-Z
    if (charCode >= 65 && charCode <= 90)
        return true

    // Check if character is a-z
    if (charCode >= 97 && charCode <= 122)
        return true

    // Check if character is 0-9
    if (charCode >= 48 && charCode <= 57)
        return true

    return false
}

function cleanString(string) {
    let alphaString = ""

    for (let char of string)
        if (isAlphaChar(char)) alphaString += char

    return alphaString
}

function reverseString(string) {
    let reversedString = ""

    for (let i = string.length -1; i >= 0; i--)
        reversedString += string[i]

    return reversedString
}

const palindromes = function (stringToCheck) {
    stringToCheck = cleanString(stringToCheck).toLowerCase()
    let reversedString = reverseString(stringToCheck).toLowerCase()

    return stringToCheck === reversedString
}

// Do not edit below this line
module.exports = palindromes;
