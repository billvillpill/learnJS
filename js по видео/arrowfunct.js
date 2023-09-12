// нужно переделать функцию, сделать явный возврат объекта
const newPost = (post, addetAt = Date()) => {
    // в теле присвоил объект к переменной newFirstPost
    // чтобы после сделать возврат.
    const newFirstPost = {
        ...post,
        addetAt,
    }
// явный возврат объекта:
return newFirstPost
}
// объект, который будет передан, как аргумент
// стрелочной функции 
const firstPost = {
    id: 1,
    author: "Vlad"
}
// вызов стрелочной функции, через переменную 
// newPost.
console.log(newPost(firstPost))





