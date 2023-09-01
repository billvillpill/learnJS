/**
 * Modify function multiplyAll so that it returns the product of all the numbers in
 *  the sub-arrays of arr.
 * function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
 */

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j].length; i++) {
        product *=  arr[j][i]
    } 
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]))
