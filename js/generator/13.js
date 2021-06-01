// yield* + return
function* genFunWithReturn() {
    yield 'a'
    yield 'b'
    return 'The result'
}

function* logReturned(genObj) {
    const result = yield* genObj
    console.log(result);
}


const test = [...logReturned(genFunWithReturn())]
console.log(test); // ['a','b']