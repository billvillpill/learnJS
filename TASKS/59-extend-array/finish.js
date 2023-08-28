/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */
class ExtendedArray extends Array {    
    sum () {
        return this.reduce((sumNumbers, num) => sumNumbers += num, 0)
    }
    onlyNumbers () {
        return this.reduce((sumNumbers, num) => 
            typeof num !== 'number' 
                ? sumNumbers 
                : sumNumbers.concat(num), [])
    }
}
const myNumbers1 = new ExtendedArray(2, 3, 4, 10, 456)
const myNumbers2 = new ExtendedArray(55, '4g3', 4, 'hg', 99)

console.log(myNumbers1.sum())
console.log(myNumbers1.onlyNumbers())

console.log(myNumbers2.sum())
console.log(myNumbers2.onlyNumbers())

