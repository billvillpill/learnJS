/**
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop)
is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return
the string No such property.


// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  // Only change code above this line
}

lookUpProfile("Akira", "likes");
 */


const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
function lookUpProfile(name, prop) {
    // Only change code below this line
    let j = 0; 
    let result = 0;
    let resultconsole; 
    const len = contacts.length
    // тут опеределил есть ли "name" во всем массиве объектов contacts,
    // если нет выводит "No such contact"
    for (let i = 0; i < len; i++) {
        if (contacts[i].firstName !== name) {
            result += 1
        } else if (contacts[i].firstName == name) {
            j = i // сохраняю индекс объекта, т.к. в нем есть нужное firstName
        }
    }
    // если result равен длине массива, значит name не найдет в массиве 
    if (result == len) {
        resultconsole = "No such contact"
    }
    // нужно определить есть ли в объекте prop (property)
    if (result < len) {  
    // если result меньше длины массива, значит есть один объект в котором есть нужноt
    // firstName или (name - параметр функции)
        resultconsole = contacts[j].hasOwnProperty(prop) ? contacts[j][prop] : "No such property"
    }
    return resultconsole
}
console.log(lookUpProfile("Kristian", "lastName"))
