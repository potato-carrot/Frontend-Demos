// 如果想第一次调用next的时候就给yield返回值，必须先包一层

function wrapper(generatorFunciton) {
    return function (...args) {
        let iter = generatorFunciton(...args)
        iter.next()
        return iter
    }
}

const wrapped = wrapper(function* () {
    console.log(`hi,${yield}`);
    return 'DONE'
})

wrapped().next('jack')