/**
 Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string
 with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
 */
function primeFactors(number) {
    console.log(number)
    let n = 2;
    let string = "";
    let stepen = 0;
    
    while (number !== 1) {
        if((number % n) !== 0) {
            if(stepen > 1) {
                string += `(${n}**${stepen})`
            } else if(stepen === 1) {
                string += `(${n})`
            }  
        n += 1;
        stepen = 0;
        } else {
            number /= n
            stepen += 1
        }
    }
    if(stepen > 1) {
        string += `(${n}**${stepen})`
    } else if(stepen === 1) {
        string += `(${n})`
    }  
    return string
}
console.log(primeFactors(86240))