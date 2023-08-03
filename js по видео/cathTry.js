const fnWithError = () => {
    throw new Error('Some error')
}
try {
// если внутри этого блока происходит ошибка,
// она ловится 
// error это объект, соджержащий сообщение в 
// свойстве message
fnWithError()
} catch (error) {
// если ошибка поймана, выполнение кода продолжиться.
console.error(error)
// выводит только сообщение 'Some error'
console.log(error.message)
}
console.log('Continue...')
