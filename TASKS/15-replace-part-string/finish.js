/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */
const day = 'Good Morning'

const day2 = day.replace('Morning', 'Evening') //ищет часть строки(первый аргумент) и заменяет ее на другую. 

console.log(day2)