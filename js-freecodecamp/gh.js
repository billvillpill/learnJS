function bouncer(arr) { 
    let newArr = [];
    arr.forEach((el) => typeof(el) === 'number' || typeof(el) === 'string' && typeof(el) === '' ? newArr.push(el) : true);
    return newArr;
}
  
console.log(bouncer([7, "ate", "", false, 9]));
