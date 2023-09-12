/**
 Consider an array/list of sheep where some sheep may be missing from their place.
 We need a function that counts the number of sheep present in the array (true means present).
 */
 function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((sum, el) => {if(el !== true) {
        return sum += 0
    } else {
        return sum += 1
    }}, 0);
  }
  console.log(countSheeps([true, false, false, true, false, false, true, false]))
  