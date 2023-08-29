/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

// Создайте функцию здесь
const sumObjectValues = (objectNum) => {
  return Object.keys(objectNum).reduce((sum, key) => typeof objectNum[key] !== 'number'
   ? sum
   : sum += objectNum[key], 0)
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
