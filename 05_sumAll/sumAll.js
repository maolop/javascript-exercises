const sumAll = function(int1, int2) {
    let sum = 0
    
    if (int1 > int2) [int1, int2] = [int2, int1]
    if (int1 < 0 || int2 < 0) return "ERROR"
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR"

    while (int1 <= int2) {
        sum += int1
        int1++
    }
    
    return sum

};

// Do not edit below this line
module.exports = sumAll;
