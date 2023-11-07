//https://www.codewars.com/kata/5713bc89c82eff33c60009f7/javascript

function freudianTranslator(str) {
    return !str ? '': str.split(' ').map(item => item = 'sex').join(' ')
}
freudianTranslator("the answer to life, the universe and everything")
freudianTranslator("The Hitchhiker's Guide to the Galaxy")
freudianTranslator("")