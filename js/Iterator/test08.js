const map = new Map().set('a', 2).set('b', 2)

for (let [key, value] of map) {
    console.log(key, value);
}