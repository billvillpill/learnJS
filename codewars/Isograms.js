/**
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function
that determines whether a string that contains only letters is an isogram. Assume the empty string is
an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
 */
// function isIsogram(str) {
//     let i = 0;
//     let j = 1
//     let sumtrue = 0
//     for (let k = 1; k < str.length; k++) {
//         let different = str.charCodeAt(i) - str.charCodeAt(j);
//         i += 1;
//         j += 1;
//         if (different == -1 || different == 1 || different == 0) {
//             return false
//         } else if(different >= 2 ||  different <= -2) {
//             sumtrue += 1
//         }
//     }
//     if(sumtrue == str.length - 1) {
//         return true
//     }   
// }
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}
console.log(isIsogram('yab'))