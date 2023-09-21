// нужно вернуть наименьший индекс из массива, после сортировки этого массива
// и вставки нового значения в его с учетом сортировки (по возрастанию).
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num)
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));