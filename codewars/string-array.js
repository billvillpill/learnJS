//Write a function to split a string and convert it into an array of words.
function stringToArray([...string]){
    let newString = '';
    const newStringArray = []
    string[string.length] = ' '
    string.forEach((el) => {
        if(el !== ' ' && newStringArray.length !== string.length) {
        return newString += el 
    } else if(typeof el == 'string' && newStringArray.length !== string.length) {
        newStringArray.push(newString)
        return newString = ''
    }
    });
    return newStringArray
}

console.log(stringToArray('Привет Влад'))
