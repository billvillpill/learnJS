// метод forEach
console.log('метод forEach')
const myArray = [1, 2, 3, 10]
console.log("массив myArray:", myArray)
// метод forEach возвращает только undefined
// возврат функции не явный. т.к. нет фигурных скобок.
console.log('умножаем на 2, каждый элемент массива:')
const res = myArray.forEach(el => console.log(el*2))
console.log("возврат значения метода forEach:", res)
console.log("массив myArray не изменился:", myArray)

// метод MAP
// возвращает новый массив, перебирает все элементы массива и
// вызывает колбэк функции количество раз, в зависимости от
// количества элементов массива
console.log('метод MAP')
const myArray2 = [1, 2, 3, 20]
console.log("массив myArray2:", myArray2)
// если в 
const newArray2 = myArray2.map((el) => el * 3)
// если колбэк функция будет записана с помощь фигурных
// скобок без return результат не возратится.
// так же в этом случаи можно, записать как функциональное 
// выражение.
// пример:
// const newArray2 = maArrae2.map((el) => {
//     return el * 3
// })

console.log("результат умнажения методом map, массив newArray:",
newArray2)
console.log("массив myArray2:", myArray2)
// newArray2 это новый массив, при этом оригальный массив
// неизменился.
console.log("массив newArray2:", newArray2)


