// Q1 
console.log(NaN === NaN)  // false

// Q2
console.log(Object.is(NaN, NaN)) // true

// Q3
console.log(Object.is(+0, -0)); // false
console.log(Object.is(0, -0)); // false
console.log(Object.is(0, +0)); // true

console.log(Object.is([1, 2, 3], [1, 2, 3])); // false
console.log(Object.is({ a: 1 }, { a: 1 })); // false
console.log(Object.is({}, {})); // false

// Q4 如何检测多个值是否相等
function isAllEqual(x, ...rest) {
    return Object.is(x, rest[0]) && (
        (rest.length < 2 || isAllEqual(...rest))
    )
}

console.log(isAllEqual(3, 3, 3, 3)); // true

let a = [];
let b = a;
let c = b;
console.log(isAllEqual(a, b, c)); // true

console.log(isAllEqual(3, 3, 3, {}, {})); // false


