// function factorial(n) {
//     if (n === 0) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

// console.log(factorial(6));
// console.log(factorial(4));

const memorize = function (fn) {
    const lookup = {}
    return args => {
        console.log(lookup);
        return lookup[args] || (lookup[args] = fn(args))
    }
}

const memorizeactorial = memorize((n) => {
    if (n === 0) {
        return 1
    }
    return n * memorizeactorial(n - 1)
})
console.log(memorizeactorial(5));
console.log(memorizeactorial(4));
console.log(memorizeactorial(3));

