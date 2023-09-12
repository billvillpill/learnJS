/**
 Use parseInt() in the convertToInteger function so it converts the input string str into an integer,
 and returns it.
 */

function convertToInteger(str) {
    return parseInt(str)
}

console.log(convertToInteger("56"))
// преоброзовать двоичное число в целое

function convert(str) {
    return parseInt(str, 2)
}

console.log(convert("010"))   