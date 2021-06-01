function Obj(value) {
    this.value = value
    this.next = null
}

Obj.prototype[Symbol.iterator] = function () {
    let iterator = { next }
    let current = this
    function next() {
        if (current) {
            const value = current.value
            current = current.next
            return { value, done: false }
        } else {
            return { done: true }
        }

    }
    return iterator
}

let one = new Obj(1)
let two = new Obj(2)
let three = new Obj(3)
one.next = two
two.next = three

let iter = one[Symbol.iterator]()
console.log(iter.next()); // {value:1,done:false}
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (let i of one) {
    console.log(i);
}

