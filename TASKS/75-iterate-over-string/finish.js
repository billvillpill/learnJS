/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

// в англичком 'y' - гласная, поэтому добавил в массив
let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
let i = 0

const str = 'Today is the best day of my life'
// сделал из строки массив, потоп перебла его
vowelsCount = [...str].reduce((sum, lit) => vowels.includes(lit) ? sum += 1 : sum, 0)
// Напишите код здесь

console.log(vowelsCount)
// 12
