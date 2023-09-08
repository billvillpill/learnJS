/**
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */
// мое решение:
function rot13(message){
    let newMessage = ''
    for (let i = 0; i < message.length; i++) {
        //нахожу число символа по таблице ASCII
        let numMess = message.charCodeAt(i)
        let delta = numMess + 13 // т.к. нужно заменить на символ через 13 символов
        //проверяю на диапозон, т.к могут передеваиться обсолютно разные символы
        // тут два диапозона заглавных букв (от 64 до 91) и строчных (от 96 до 123)

        if(numMess > 64 && numMess < 91 && (delta > 90)) {
            newMessage += String.fromCharCode(64 + delta - 90)

        } else if(numMess > 64 && numMess < 91 && (delta <= 90)) {
            newMessage += String.fromCharCode(delta)

        } else if(numMess > 96 && numMess < 123 && (delta > 122)) {
            newMessage += String.fromCharCode(96 + delta - 122)

        } else if(numMess > 96 && numMess < 123 && (delta <= 122)){
            newMessage += String.fromCharCode(delta)

        } else {
            // если все условия выше ложны, тогда добавляется просто символ, не изменяя его.
            newMessage += message[i]
        }
    }
    return newMessage
}
console.log(rot13("n6/>;njm?+[RA"))
// как можно было решить
// const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));
// console.log(rot13("ABCZMabczm67z&$"))
