// 改写Symbol.iterator方法
let str = new String('joris')

str[Symbol.iterator] = function () {
    return {
        next() {
            if (this._first) {
                this._first = false
                return { value: 'youku', done: false }
            } else {
                return { value: undefined, done: true }
            }
        },
        _first: true
    }
}

console.log([...str]); // [ 'youku' ]