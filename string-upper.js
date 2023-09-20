// Каждое слова строки должно начинаться с верхнего регистра, следующие символы с нижнего регистра. 
function titleCase(str) {
    return (str.toLowerCase().split(' ')).map(el => el[0].toUpperCase() + el.slice(1, el.length)).join(' ');
} 
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
