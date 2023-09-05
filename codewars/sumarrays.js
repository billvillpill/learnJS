/**
Write a function that takes an array of numbers and returns the sum of the numbers.
The numbers can be negative or non-integer. If the array does not contain any numbers then
you should return 0.
 */
// Sum Numbers
const sum = ([...numbers]) => {
    // return typeof numbers[0]
    console.log(numbers)
    return numbers.reduce((sum, num) => numbers.length !== 0 ? sum += num : sum, 0);
};
console.log(sum([-1, 2, 4, 10, 1.5]))