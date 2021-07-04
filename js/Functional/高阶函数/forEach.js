// 自定义一个forEach
const arr = [1, 2, 3, 4]
// arr.forEach((item, index) => { })

Array.prototype.myForEach = function (fn) {
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        fn(this[i], i)
    }
}

arr.myForEach((item, index) => {
    console.log(item, index, "执行myForEach");
})