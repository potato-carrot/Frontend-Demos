// 格式化parseInt
console.log(parseInt('1', 0));
console.log(parseInt('2', 1));

function unary(fn) {
    if (typeof fn === 'function') {
        return fn.length === 0 ? fn : args => fn(args)
    } else {
        return () => { }
    }
}

console.log([1, 2, 3].map(unary(parseInt)));