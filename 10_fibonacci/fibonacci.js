const fibonacci = function(index) {
    let fiboSequence = [1, 1]
    index = Number(index)

    if (index === 0) return 0
    if (index < 0) return "OOPS"

    while (fiboSequence.length < index) {
        fiboSequence.push(fiboSequence[fiboSequence.length - 2] + fiboSequence[fiboSequence.length - 1])
    }

    return fiboSequence[fiboSequence.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
