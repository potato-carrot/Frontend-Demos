// Generator函数执行后返回的实例就继承了Generator函数本身，不需要使用new，this也是无效的

function* g() {

}

g.prototype.hello = function () {
    return 'hello'
}

const iter = g()

// 报错
// const iter = new g() 

console.log(iter.hello());

