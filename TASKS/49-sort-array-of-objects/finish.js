/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */

const sortProductsByPrice = (products) => {
  // копируем массив в переменную sortedProducts при вызове функции.
  // a и b это элементы массива - первый и второй, через точечную запись получаю доступ к значению 
  // price cвойств объектов, в массива inputProducts.
  // сортировка происходит следующим способом:
  // Если разница отрицательная: значит значения элемента 'a' меньше значения элемента 'b'
  // Если разница положительная (больше нуля), тогда значение элемента 'a' больше значения элемента 'b'
  // Если разница равна 0, тогда они одинаковы. 
  return [...products].sort((a, b) => a.price - b.price)
}

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

const sortedProducts = sortProductsByPrice(inputProducts)

console.log('Массив отсортированных товаров:', sortedProducts) // Массив отсортированных товаров

console.log('Оригинальный массив не должен измениться:', inputProducts) // Оригинальный массив не должен измениться
