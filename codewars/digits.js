/**
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal
to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.
 */

// function primeFactors(n){
//     for(var s = '', d = 2;n>1;d++) {
//         for (var k = 0;n%d == 0;k++, n/=d);
//         s += k ? (k==1 ? `(${d})` : `(${d}**${k})`) : '';
//     }
// return s
// }

function digPow(n, p){
    let number = n;
    const numberArray = [];
    let q = n;
    let s = 1;
    let sum = 0;   
    for(let k = 10; Math.floor(n/k*10) !== 0; k *= 10) {
        q = Math.floor((n % k) / (k/10))
        numberArray.unshift(q)
        s *= 10
    }
    //переделай на reduce
    numberArray.forEach(el => {
        sum += el**p
        p++
    }) 
    return (sum % number) === 0 ? sum / number : -1
}
console.log(digPow(46288, 3))