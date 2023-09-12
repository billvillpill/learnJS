/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

setTimeout(function myFn() {
  console.log('Привет из функции myFn')
}, 2000)


// нужно убрать вызов функции myFn. т.к. функция setTimeout вызывается автоматический, а в 
// скобках функця myFn и 2000 это аргументы. 
// так же функция myFn не в глобальной обл видимости