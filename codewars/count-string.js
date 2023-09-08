/**
The main idea is to count all the occurring characters in a string. If you have a string like aba,
then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}
 */
function count(myString) {
    const stringObject = {}
    // stringObject[myString[0]] = 1;
    for (let i = 0; i < myString.length; i++) {
        stringObject.hasOwnProperty(myString[i]) ? stringObject[myString[i]] += 1 : stringObject[myString[i]] = 1
    }
    return stringObject
}
console.log(count('abcdefladf'))


