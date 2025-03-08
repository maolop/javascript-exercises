const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
	let total = 0
  for (item of nums)
    total += item
  return total
};

const multiply = function(nums) {
  let total = 1
  for (item of nums)
    total *= item
  return total
};

const power = function(num, power) {
  return num ** power
};

const factorial = function(num) {
  let total = 1
  while (num >= 1) {
    total *= num
    num--
  }
  return total

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
