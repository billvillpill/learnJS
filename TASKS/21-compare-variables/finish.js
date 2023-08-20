/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'
Number(myVariable2)

// Напишите код здесь
if (myVariable1 <= myVariable2) {
    console.log(true);
} else {
    console.log(false);
}

myVariable1 = '20'
myVariable2 = 100
Number(myVariable1)

// parseInt(myVariable1) так же можно было, конвентирует строку в число.

// Напишите код здесь
if (myVariable1 <= myVariable2) {
    console.log(true);
} else {
    console.log(false);
}
// короче:
console.log(myVariable1 <= myVariable2)

