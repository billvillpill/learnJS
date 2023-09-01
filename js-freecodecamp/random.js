/**
 Используйте этот random метод для генерации и возврата случайного целого числа в диапазоне от 0до 9.

 */


const randomWholeNum = () => {
    return Math.floor(Math.random(0, 10) * 10);
}

console.log(randomWholeNum())
