function* foo() {
    try {
        yield 1
    } catch (e) {
        console.log(e, "内部捕获错误");
    }
    yield 2
}

const iter = foo()

try {
    iter.next()
    iter.throw('a')
    iter.throw('b')
} catch (error) {
    console.log(error, '外部捕获错误');
}