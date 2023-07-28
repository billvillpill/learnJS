function printName () {
    console.log('Vlad')  // это колбэк функция, т.к. выполнетс внутри другой функции
}
console.log('Start')
setTimeout(printName, 2000)
