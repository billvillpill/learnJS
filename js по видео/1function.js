const person = {              // person переменная хранящая ссылку на обект
    name: 'Vlad',             // объект
    age: 29,
    country: {
        myCountry: 'Belarus'
    }
}
// функция increasePersonAge, в 15 строке, создает новый объект, переводя его в строку JSON, после
// снова в объект, таким образом вложанные свойства объекта person, не будут изменяться (мутироваться объект person) 
// если не было вложеного свойства в объекте, тогда можно было воспользоваться { ...person} или
// Object.assign({}, person)
function increasePersonAge() {                           
const updatedPerson = JSON.parse(JSON.stringify(person))
// вносим измения в age нового объекта updatedPerson, при этом объект person 
// должен остаться без изменений.
updatedPerson.age += 1
// возвращаем значения объекта
return updatedPerson  
}
// новая переменная к которой присваивается ссылка нового объекта от переменной updatedPerson, 
// после получения результата функции increasePersonAge.
const updatedPersonOne = increasePersonAge()
//  меняем значение вложеного свойства myCountry на "USA"
// этоже свойство в объекте person должно остаться прежним.
updatedPersonOne.country.myCountry = 'USA'

console.log(updatedPersonOne)
console.log(person)

