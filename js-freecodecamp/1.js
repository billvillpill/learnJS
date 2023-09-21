// поиск строки через через переменную в регулярном выражении
function confirmEnding(str, target) {
  // создается регулярное выражение: Аналогичное /n$/g
  // т.к. нужно денамически изменять рег. выражение по переменной target
  const regexp = new RegExp(`${target}$`, 'g')
  return regexp.test(str);
}

console.log(confirmEnding("an Bastian", "n"));