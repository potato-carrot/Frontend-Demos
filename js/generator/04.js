// next的参数是上一个yield的返回值
function* foo(x) {
    let y = 2 * (yield (x + 1)) // x=5 y=24 z=13
    let z = yield (y / 3)
    return (x + y + z)
}

let a = foo(5)

console.log(a.next());
console.log(a.next());
console.log(a.next());

let b = foo(5)

console.log(b.next());
console.log(b.next(12));
console.log(b.next(13));
