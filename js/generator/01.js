function* helloWorldGenerator() {
    yield 'hello'
    yield 'world'
    return 'ending'
}

const iter = helloWorldGenerator()

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// for (let value of iter) {
//     console.log(value);
// }