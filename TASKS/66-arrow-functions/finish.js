/** ЗАДАЧА 66 - Стрелочные функции
 *
 * Замените обычные функции на стрелочные
 */

// function mult(a, b) {
//   return a * b
// }

// setTimeout(function () {
//   console.log(mult(5, 10))
// }, 1000)
// 50

// первая стрелочная функция
const mult = (a, b) => a * b

// вторая стрелочная функция
setTimeout(() => console.log(mult(5, 10)), 1000)