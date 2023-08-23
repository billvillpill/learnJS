/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const areArraysEqual = (firstArray, secondArray) => {
    if (
        firstArray.length === secondArray.length &&
        firstArray.every((element, index) => element === secondArray[index])
    ) {
        return true
    }
    return false 
}

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log('Сравнение массивов, влоб:', a === b) // false (Почему?) 
// это разные объекты, они хранятся в разных местах памяти, и ссылки на них разные.

const c = [2, 1, 3]
const d = [1, 2, 3, 4]


console.log('через функцию:')
console.log('Сравнение элемегтов массивов a и b:', areArraysEqual(a, b)) // true
console.log('Сравнение элементов массивов a и c:', areArraysEqual(a, c)) // false
console.log('Сравнение элементов массивов a и d:', areArraysEqual(a, d)) // false
