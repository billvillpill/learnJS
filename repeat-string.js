function truncateString(str, num) {
    num >= str.length ? str : str = str.split('').slice(0, num).join('') + '...';
    return str;
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
Array.prototype.split
