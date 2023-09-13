/**
Singularity Numbers
This is a rather simple but interesting kata. Try to solve it using logic. The shortest solution can be fit into one line.

Task
The point is that a natural number N (1 <= N <= 10^9) is given.
You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].
 */
// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
function realNumbers(n){
    // работает но медлено:
    // return ( Array.from({ length: (n - 1) / 1 + 1 }, (_, i) => 1 + i * 1) ).filter(  (el) => (el % 2 !== 0) && (el % 3 !== 0) && (el % 5 !== 0)  ).length
    return n - (Math.floor(n/2) + Math.floor(n/3) + Math.floor(n/5) - (Math.floor(n/6) - Math.floor(n/(30))) - (Math.floor(n/10)- Math.floor(n/(30))) - Math.floor(n/15) - Math.floor(n/(30)))
}
console.log(realNumbers(9999617))
