// Q1 Promise.reject用于try/catch
// 没有进入catch，虽然Promise.reject是同步执行的，但是这里必须用异步模式才能捕获错误，用try/catch同步结构是无法捕获的
// try {
//     Promise.reject(new Error('error'))
// } catch (e) {
//     console.log(e,"catch an error");
// }

// Q2 Promise.resolve的本质
let p1 = new Promise((resolve, reject) => resolve())
let p2 = Promise.resolve()
// 本质上p1和p2是一样的，都是一个返回一个解决的promise实例

// Q3 Promise.resolve包裹一个常数/Promise实例
let p = Promise.resolve()
// Promise.resolve是一个幂等操作
console.log(p === Promise.resolve(p)); // true
console.log(p === Promise.resolve(Promise.resolve(p))); // true
