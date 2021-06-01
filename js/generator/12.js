// generator实例也部署了Symbol.iterator接口，调用返回其本身

function* gen() {
    yield 'hello'
    yield* inner()
    yield 'world'
}

function* inner() {
    yield 'inner'
}

const i = gen()
const iter = i[Symbol.iterator]()
console.log(i === iter); // true