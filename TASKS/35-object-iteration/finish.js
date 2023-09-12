/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

// через метод forEach
Object.values(myObject).forEach(value => {
  if (value === myObject.key1 || (value === myObject.key3)) {
    console.log(value)
  }
});

// через метод for
for (const key in myObject) {
  if(myObject[key] === true) {
    console.log(myObject[key])
  }
  if (myObject[key] === 'abc') {
    console.log(myObject[key])
  } 
}

