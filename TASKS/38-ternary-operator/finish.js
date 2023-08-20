/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

// №3
const isArrayEmpty = (inputArray) => {
  inputArray.length > 0
    ? console.log('Массив не пустой')
    : console.log('Массив пустой')
}
isArrayEmpty([1, 3])
isArrayEmpty([])

// №1
// const isArrayEmpty = (inputArray) => {
//   if (inputArray.length > 0) {
//     return 'Массив не пустой'
//   }
//   return 'Массив пустой'
// }
// console.log(isArrayEmpty([1, 3]))
// console.log(isArrayEmpty([]))

// №2 
// function isArrayEmpty(inputArray) {
//   return inputArray.length > 0
//     ? 'Массив не пустой'
//     : 'Массив пустой'
// }
// console.log(isArrayEmpty([1, 3]))
// console.log(isArrayEmpty([]))
