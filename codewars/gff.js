/**
You are given an integer N. Your job is to figure out how many substrings inside of N divide evenly with N.

Confused? I'll break it down for you.

Let's say that you are given the integer '877692'.

8 does not evenly divide with 877692. 877692/8 = 109711 with 4 remainder.

7 does not evenly divide with 877692. 877692/7 = 125384 with 4 remainder.

7 does not evenly divide with 877692. 877692/7 = 125384 with 4 remainder.

6 evenly divides with 877692. 877692/6 = 146282 with 0 remainder.

9 does not evenly divide with 877692. 877692/9 = 97521 with 3 remainder.

2 evenly divides with 877692. 877692/2 = 438846 with 0 remainder.
 */
// не решил
function getCount(n) {
    let number;
    let sum = 0;
    const str = [...''+ n].map(Number);
    str.forEach((num) => {
        console.log('делитель', num)
        number = n % num
        console.log('остаток', number)
        if(number == 0 && n !== num) {
            sum += 1
        }
    });

    return sum 
}
console.log('результат', getCount(2))
