/**
 Мы определили функцию rangeOfNumbersс двумя параметрами. Функция должна возвращать массив целых чисел,
 который начинается с числа, представленного параметром, startNumи заканчивается числом,
 представленным параметром endNum. Начальное число всегда будет меньше или равно конечному числу.
 Ваша функция должна использовать рекурсию, вызывая саму себя, а не использовать какие-либо циклы.
 Это также должно работать в случаях, когда оба startNumи endNumодинаковы.

function rangeOfNumbers(startNum, endNum) {
  return [];
};
 */

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const numbersArray = rangeOfNumbers(startNum + 1, endNum)
        numbersArray.unshift(startNum);
        return numbersArray
    }
  };

  console.log(rangeOfNumbers(10 , 10))