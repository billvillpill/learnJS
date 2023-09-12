/**Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally
typed them. */

//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () { 
    // split разбивает строку на массив, после методом map перебирает массив
    //внутри map функция возвращает сложение первой буквы элемента строки word с 
    // остальной частью строки начиная со второй буквы (word.slice(1)).
    // join складывает все элементы массива в строку, вставля при этом пробелы
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  const jaden = "How Can Mirrors Be Real If Our Eyes Aren't Real"
  console.log(jaden.toJadenCase())