/**
 * Object
 */

// 类型“object”上不存在属性“b”
// let a: object = {
//     b: 'a'
// }
// a.b

let a = {
    b: '1'
}
console.log(a.b);

let c: { d: number } = {
    d: 10
}
console.log(c.d);

export { }