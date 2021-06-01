let arr = [1, [2, 3], [3, [4, 5]]]

function* flat(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            yield* flat(arr[i])
        } else {
            yield arr[i]
        }
    }
}


for (let item of flat(arr)) {
    console.log(item);
}