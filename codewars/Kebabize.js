/**
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
 */
function kebabize(str) {
    return str.split('').map(el => el.charCodeAt(0) < 91 ? `-${el.toLowerCase()}` : el).join('').replace(/\d/g, "").replace(/^-/, "");
}
// function kebabize(str) {
//   return str.replace(/[^a-z]/ig, '').
//   replace(/^[A-Z]/, c => c.toLowerCase()).
//   replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
// }
console.log(kebabize("MyCamelHas3Humps"));