// вернуть первое число из массива arr, которое соответсвует истене (true) в результате функции func,
// которая передается в качестве аргумента.
// Если все элементы массива - в результате функции func возвращают false. тогда вернуть undefined
function findElement(arr, func) {
    let num;
    let i = 0;
    do {
        num = arr[i] 
        func(num) ? num : num = undefined
        i += 1;
    } while (func(num) === false && i < arr.length);
    return num;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));