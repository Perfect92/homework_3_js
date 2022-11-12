// 1 Задача Я не понял
// 2 Задача
let s = []
for (let i = 0; i < 10; i++) {
    s.push('x')
}
console.log(s)

// 3 Задача
function v () {
    let r = 1
    return function () {
        return r++
    }
}
let func = v()
console.log(func())
console.log(func())
console.log(func())
console.log(func())
