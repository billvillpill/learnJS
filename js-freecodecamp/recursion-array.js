/**
 * Write a recursive function, sum(arr, n), that returns the sum of the first n elements
 *  of an array arr.
 * 
 function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
 */
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
    // Only change code above this line
  }

  console.log(sum([1, 2, 10, 30, 2], 5))