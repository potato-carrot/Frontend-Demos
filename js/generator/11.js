// yield*语法可以让generator函数内部嵌套generator函数

function* gen() {
    yield 'hello'
    yield* inner()
    yield 'world'
}

function* inner() {
    yield 'inner'
}

const i = gen()
console.log(i.next());
console.log(i.next());
console.log(i.next());