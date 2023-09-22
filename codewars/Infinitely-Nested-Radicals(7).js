/**
Hello,

I am Jomo Pipi

and today we will be evaluating an expression like this:

(there are an infinite number of radicals)

for a given value x
 */
function fn(x) {
    let sqrtX = Math.sqrt(x);
    for (let i = 0; i < 40000; i++) {
      sqrtX = Math.sqrt(x + sqrtX)
    }
    return sqrtX;
}
console.log(fn(2))