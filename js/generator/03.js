let obj = {}
let arr = []
console.log(Symbol.iterator in obj);
console.log(Symbol.iterator in arr);

obj[Symbol.iterator] = function* () {
    yield 1
    yield 2
    yield 3
}

console.log([...obj])