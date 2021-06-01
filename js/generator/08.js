// Generator执行后给obj部署了Symbol.iterator接口
// 因此令其可被扩展运算符或Array.from转化为数组

function* foo() {
    yield 1
    yield 2
    return 'done'
}


console.log([...foo()]);
console.log(Array.from(foo()));