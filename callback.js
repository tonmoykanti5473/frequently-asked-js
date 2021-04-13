function callBack(name, age, task) {
    console.log('hello', name)
    console.log('age', age)
    task()
}
function baalFalao() {
    console.log('Tonmoy Baal Falaw')
}
function maalFalao() {
    console.log('Mrinmmoy maal falaw')
}
function scrollFb() {
    console.log('Anoy nosto hoye gese')
}
callBack('Tonmoy', 21, baalFalao)
callBack('Mrinmoy', 22, maalFalao)
callBack('Anoy', 23, scrollFb)













