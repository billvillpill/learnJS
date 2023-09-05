/**
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns
the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing.
The length of the array will always be at least 2.
The array will always contain letters in only one case.
Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
 */
// function findMissingLetter(letters) {
//     let newLetters 
//     newLetters = letters.map((el) => el.toLowerCase())
//     let i = 0;
//     let j = 0;
//     let ki = 0;
//     let  kj = 0;
//     let search
//     const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
//      'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// //ищу индекс буквы 'g' в массиве alpha, которая равна первой буквы из массива letters
//     const find = (element) => {
//         return element === newLetters[0] ? true : false
//     }
//     i = alpha.findIndex(find)
// // зная, что буква 'g' в массиве alpha начинается с 6. 
// // проверяю каждую букву letters с буквами alpha начиная с индекса 6.  
//     for (let index = 0; index < newLetters.length; index++) {
//         if(newLetters[j] === alpha[i]) {
//             i += 1
//             j += 1
//             ki = i - 1
//             kj = j - 1
//         } else if(letters[kj] === alpha[ki]) {
//             search = alpha[i]
//         } else {
//             search = alpha[i].toUpperCase()
//         }
//     }
//     return search
// }
//сравнивается коды символов, первую буквку не сравнивают.
// начинают со 2ой. буква E имеет код 69, а F 70
// если first + i равно array[i].charCodeAt(0) тогда цикл продолжается, если нет =Ю
// возвращается символ String.fromCharCode(first + i)
function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    console.log(first)
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")
  }
console.log(findMissingLetter(['E', 'F', 'G', 'H', 'J']))
console.log(findMissingLetter(['e', 'f', 'g', 'i', 'j']))