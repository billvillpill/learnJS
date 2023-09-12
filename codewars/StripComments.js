/**
Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
Any whitespace at the end of the line should also be stripped out.

        Example:
        Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

        The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
 */
function solution(input, markers) {
    let i = 0;
    let str = ''
    let inputArray = input.split(/\n/)
    console.log(inputArray)
    inputArray.forEach(element => {
        if(element.includes(markers[i])) {
            str = str + element.slice(0, element.indexOf(markers[i]) - 1) + '\n'
            i += 1
        } else {
            str += element + '\n'
        }
    });
    return str.replace(/\n$/, '')
}
// не мое решение:
// function solution(input, markers) {
//     return input.split('\n').map(
//       line => markers.reduce(
//         (line, marker) => line.split(marker)[0].trim(), line
//       )
//     ).join('\n')
// }
console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']))