/**
 * 最优解
 * 注意判空
 * 最后要return Math.max(maxNum, count)
 * 否则当输入[1]时，返回的是0
 */
function getMaxConsecutive(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0
    }
    let maxNum = 0
    let count = 0
    arr.forEach(item => {
        if (item === 1) {
            count++
        } else {
            maxNum = Math.max(maxNum, count)
            count = 0
        }
    });
    return Math.max(maxNum, count)
}

console.log(getMaxConsecutive([1, 1, 0, 1, 1, 1, 1]))