function* foo() {
    yield 1
    yield 2
    yield 3
    return 4
}

for (let value of foo()) {
    console.log(value);
}