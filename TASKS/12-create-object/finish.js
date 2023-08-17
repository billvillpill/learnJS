/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */
const userProfile = {
    name: "Vlad",
    surname: "Pigotskij",
    favoriteNumber: 22
}
console.log(`My name is ${userProfile.name} ${userProfile.surname} and my favorite number` +  
` is ${userProfile.favoriteNumber}`)