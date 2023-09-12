/** ЗАДАЧА 76 - Поменять местами значения двух переменных
 *
 * Поменяйте местами значения переменных "a" и "b".
 * Не используйте для этого какие-либо новые переменные.
 */

let a = 'first'
let b = 'second'

console.log(a, b)
// first second

// Напишите код здесь
// мой вариант
// a = [...a] 
// b = [...b]

// b.forEach(el => a.push(el));
// b = ''
// for (let i = 0; i < 5; i++) {
//     b += a[i];
// }
// a = a.reduce((sum, el) => b.includes(el) ? sum : sum += el, 's')

;[b, a] = [a, b]
// нормальный вариант решения
console.log(a, b)
// second first
