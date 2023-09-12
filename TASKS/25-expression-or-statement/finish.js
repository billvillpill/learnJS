/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 //выражение-инструкция

const myObject = { //выражение
  x: 10,
  y: true,
}

myObject.z = 'abc' //выражение

delete myObject.x //выражение инструкция

let newVariable //инструкция

newVariable = 30 + 5 //выражение-инструкция

console.log(newVariable)  //выражение инструкция

if (newVariable > 10) {                       //инструкция
  console.log(`${newVariable} больше 10`) // выражение инструкция
}
