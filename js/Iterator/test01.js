let str = 'joris'
for (let char of str) {
    console.log(char);
}

let iter = str[Symbol.iterator]()
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.log([...str]);
