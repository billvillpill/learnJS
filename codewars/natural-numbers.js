/**
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
 */

// const solution = (number) => {
//     let sum = 0;
//     let n = number;
//     let sumNumbersArray = []
//     if(number < 0) {
//         return sum
//     }
//     number -= 1;
//     for (let i = 0; i < n; i++) {
//         if(number > 0) {
//             sumNumbersArray.unshift(number)
//             number-- 
//         }
//     }
//     sumNumbersArray.forEach((el) => {
//         if((el % 3 === 0) && (el % 5 === 0)) {
//             sum += el
//         } else if(el % 3 === 0) {
//             sum += el
//         } else if(el % 5 === 0) {
//             sum += el
//         }
//     })
//     return sum
// }
//ниже не мое решение
function solution(number){
    var sum = 0;
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }
console.log(solution(76498))