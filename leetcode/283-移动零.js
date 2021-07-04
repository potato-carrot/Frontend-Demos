function removeZeros(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('请输入一个数组')
    }

    let pointer = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[pointer] = arr[i]
            pointer++
        }
    }
    for (let i = pointer; i < arr.length; i++) {
        arr[i] = 0
    }
}
const arr = [0, 1, 0, 3, 12]
removeZeros(arr)
console.log(arr);