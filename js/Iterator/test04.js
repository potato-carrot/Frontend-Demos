let obj = {
    0: 'a',
    1: 'b',
    length: 2,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}


for (let i of obj) {
    console.log(i)
}

let arr = [...obj]
console.log(arr)