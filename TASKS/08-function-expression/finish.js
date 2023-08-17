/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */
const printMyMessage = function (name) {
    const messageHello = "Привет, " + name
    console.log(messageHello)
}
printMyMessage("Игорь")
printMyMessage("Ира")


// вариант со стрелочной функцией:
const printMessage = name => 
    console.log(`Привет, ${name}`)
printMessage("Влад")
printMessage("Роман")
