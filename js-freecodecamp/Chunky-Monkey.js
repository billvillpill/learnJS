function chunkArrayInGroups(arr, size) {
    const newArr = [];
    const kol = Math.ceil(arr.length/size)
    for (let i = 0; i < kol; i++) {
        arr.length < size ? newArr.push(arr) : newArr.push(arr.splice(0, size));
    }
    return newArr;
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));