/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const myCars = [
    {
        carBrand: 'bmw',
        price: 42000,
        isAvailableForSale: true
    },
    {
        carBrand: 'audi',
        price: 32000,
        isAvailableForSale: true
    },
    {
        carBrand: 'opel',
        price: 28000,
        isAvailableForSale: false
    }
]

console.log(myCars)

const newCar = {
    carBrand: 'tesla',
    price: 50000,
    isAvailableForSale: true
}
myCars.push(newCar)
console.log(myCars)