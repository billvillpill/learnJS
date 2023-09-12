/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]
// первый вариант
//  const postsJS = postsJSON.map((post) => JSON.parse(post)) 
// второй вариант
// const postsJS = postsJSON.map(JSON.parse) перебирает массив postsJSON и возращает уже новый массив.
// поэтому этим способом лучше, чем forEach.

const postsNewArray = [...postsJSON]
let newObject = [ ]
postsNewArray.forEach((value) => {
  let key = JSON.parse(value)
  newObject.push(key)
});
console.log('результирующий массив: ', newObject)
console.log('postId второго объекта: ', newObject[1].postId)
console.log('commentsQuantity последенего объекта: ', newObject[3].commentsQuantity)
