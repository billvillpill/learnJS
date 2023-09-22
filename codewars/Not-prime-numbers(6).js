/**
You are given two positive integers a and b (a < b <= 20000).
Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7)
but which are not primes themselves.

Be careful about your timing!
 */
// нужно вернуть массив чисел из цифр 2, 3, 5, 7, при этом они не должны являться простыми.
function notPrimes(a,b){
    // т.к. от 2 до 22 будут только простые числа с учетом условия задачи
    a < 22 ? a = 22 : true
    const arr = [];
    while (a < b) {
        // делитель для проверки: от 2 до а числа не включительно, цикл
        let i = 2;
        // число должно состоять только из цифр 2, 3, 5, 7
        if( /^[^146890]+$/.test(String(a)) ) {
            // если число "а" делиться с остатком, хотя бы один раз на любое число от 2 до "а", оно не будет простым
            while(a % i !== 0) {
                i += 1
            }
            a !== i ? arr.push(a) : true
        }  
        a += 1
    }
    return arr;
}
// не мое решение:
// function notPrimes(a,b){
//     let arr = []; 
//     for (let i = a; i < b; i++){
//       if (!/[014689]/.test(i)) {
//         for (let j = 2; j <= Math.sqrt(i); j++){
//           if (i % j === 0) { arr.push(i); break;}
//         }
//       }
//     }
//     return arr;
// }
console.log(notPrimes(900, 7000))
