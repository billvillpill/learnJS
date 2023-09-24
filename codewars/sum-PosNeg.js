/**
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */
function countPositivesSumNegatives(input) {
    console.log(input);
    let a = 0, b = 0;
    if(input !== null){
      input.forEach((el) => el > 0 ? a += 1 : el < 0 ? b += el : true)
      return a !== 0 && b !== 0 ? [a, b] : a === 0 && b !== 0 ? [a, b] : a !== 0 && b === 0 ? [a, b] : [];
    } else {
      return [];
    }
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, 0, -15]));