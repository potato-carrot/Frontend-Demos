// Q1 Object.assign的返回值是否和dest全等？
let dest = {};
let src = { id: "src" }
let result = Object.assign(dest, src)

console.log(result); // { id: 'src' }
console.log(dest); // { id: 'src' }
console.log(result === dest); // true

// Q2 Object.assign合并多个对象的顺序？
// 不仅是访问器属性上有[Get][Set]设置函数
let dest2 = {
    set id(newValue) {
        console.log(newValue);
    }
}

Object.assign(dest2, { id: "src1" }, { id: "src2" }, { id: "src3" })
// src1
// src2
// src3
console.log(dest2.id); // { id: [Setter] } 由于Object.assign本质上是调用了dest2的[Set]设置id属性，而这里由于重写了原生[Set]方法，自定义的设置函数又不执行赋值操作

// Q3 Object.assign中途报错？可回滚吗？
let dest3 = {};
let src2 = {
    a: "a", // 正常复制
    get b() {
        throw new Error() // 抛错，终止复制
    },
    c: "c" // 上一步抛错，终止复制
}
try {
    Object.assign(dest3, src2)
} catch (e) {
    console.log(e);
}
console.log(dest3); // { a: 'a' }

// Q4 Object.assign是深拷贝吗？
let dest4 = {};
let result2 = Object.assign(dest4, { a: { value: "a" } })
console.log(result2.a === dest4.a); // true
