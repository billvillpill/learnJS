/**
Write a function that when given a URL as a string,
parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = "cnet"
 */

function domainName(url) {
    let newArray = [];
    let strArray = url.split('/')
    strArray.forEach(el => {
        if(/\./.test(el) === true) {
            newArray.push(el)
        }
    });
    strArray = newArray[0].split('.')
    return strArray[0] === 'www' ? strArray[1] : strArray[0] 
}
// не мое решение
// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
// };

console.log(domainName('http://www.zombie-bites.com"'))
console.log(domainName('http://m3sy3p1m9lhlodduvv90i7fo-q7j.de/default.html'))
console.log(domainName('https://www.yi4d71z7inasyh.edu/default.html'))
console.log(domainName('9fs114ldq39mdd9ri75pfw.io/index.php'))