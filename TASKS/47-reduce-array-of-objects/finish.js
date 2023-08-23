/** ЗАДАЧА 47 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

// posts, minimalComentsQty это параметры функции: первый - массив, второй минимальное значение комментариев
function popularPostsIds (posts, minimalComentsQty) {
  return posts.reduce(   //возвращается массив postIds
    (postIds, post) =>
    //postsIds это акамулятор, переменная которая переходит по каждому элементу массива и собирает ключ
    // postId, который в свою очередь получаем из елемента post (массива posts) 
    //
    post.comments >= minimalComentsQty 
      ? postIds.concat([post.postId]) 
      //concat функция, складывает строки в одну, но в данном случаи массив из значения ключа postId,
      //которое вызывается через точечную запись в квадратных скобках(Хотя работает из без них).
      //и записывается в массив postIds.
      : postIds,
      //если условие ложно, тогда просто возвращает результат массива без изменений.
    [] // указывает изначальное содержимое postIds (т.е. массив)
  ) 
}


const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]

console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []