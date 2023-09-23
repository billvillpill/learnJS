// function formula(n) {
//     const pow = (x, e) => !e ? '' : e === 1 ? x : x + '^' + e;
//     const m = Math.abs(n), res = [];
//     for (let i = 0, c = 1n; i <= m; i++) {   // 1n это BigInt число, по факту это просто 1.
//         res.push((c > 1n ? c : '') + pow('a', m - i) + pow('b', i));
//         c = c * BigInt(m - i) / BigInt(i + 1);
//     }
//     return !n ? '1' : n < 0 ? '1/(' + res.join('+') + ')' : res.join('+');
// }
function formula(n) {
    let el;
    const pow = (x, e) => !e ? 0 : e === 1 ? x : x**e;
    const m = Math.abs(n), res = [];
    for (let i = 0, c = 1n; i <= m; i++) {   // 1n это BigInt число, по факту это просто 1.
        el = c + BigInt(pow(3, m - i)) + BigInt(pow(4, i))
        res.push(el);
        c = c * BigInt(m - i) / BigInt(i + 1);
    }
    const add = (a, b) => a + b
    return res.reduce(add);
}
console.log(formula(100));
// a^10+10a^9b+45a^8b^2+120a^7b^3+210a^6b^4+252a^5b^5+210a^4b^6+120a^3b^7+45a^2b^8+10ab^9+b^10
