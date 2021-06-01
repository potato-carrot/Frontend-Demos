// 迭代器实例上有return方法，调用后done变为true;
// 之后调用next时done总为true,value为undefined
function* gen() {
    yield 1
    yield 2
    yield 3
}

const i = gen()
console.log(i.next());
console.log(i.return(6));
console.log(i.next());
