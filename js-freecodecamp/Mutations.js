// задача вернуть значение true, если все буквы во втрой строке массива arr, 
// совпадают с буквами из первой строки массива.
// В любом порядке, регистр не важен
function mutation(arr) {
    let sum = 0;
    arr[1].split('').forEach(el => new RegExp(`${el}`, 'i').test(arr[0]) ? sum += 1 : true);
    return sum === arr[1].length ? true : false;
}
  
console.log(mutation(["hello", "HeLlo"]));