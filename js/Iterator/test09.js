let arr = ['a', 'b', 'c']

console.log(arr.entries());
console.log(arr.keys());
console.log(arr.values());

for (let i of arr.entries()) {
    console.log(i);
}

for (let i of arr.keys()) {
    console.log(i);
}

for (let i of arr.values()) {
    console.log(i);
}



