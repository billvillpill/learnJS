function frankenSplice(arr1, arr2, n) {
    const newArray2 = arr2.slice(0, n);
    arr1.forEach(el => newArray2.push(el));
    arr2.forEach(el => arr2.indexOf(el) < n ? true : newArray2.push(el));
    return newArray2
}
  
console.log(frankenSplice([1, 2, 3, 33, 99], [4, 5, 6, 7, 8], 5));