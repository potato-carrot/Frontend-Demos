// 通过generator令对象可使用for of遍历

const obj = {
    name: 'jack',
    age: '18'
}

obj[Symbol.iterator] = function* foo() {
    const props = Object.keys(this)
    for (let prop of props) {
        yield [prop, this[prop]]
    }
}

for (let [key, value] of obj) {
    console.log(key, value);
}