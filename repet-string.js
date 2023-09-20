function repeatStringNumTimes(str, num) {
    const newStr = str;
    num > 0 ? str : str = "";
    while (num > 1) {
        num -= 1;
        str += newStr;
    }
    return str;
}
console.log(repeatStringNumTimes("abc", 1));