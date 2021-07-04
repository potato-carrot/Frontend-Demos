/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const arr = []
    for (let i = 0; i < 26; i++) {
        arr.push(0)
    }
    for (let item of s) {
        console.log(arr[item.charCodeAt() - 97]);
        arr[item.charCodeAt() - 97] -= 1
    }
    for (let item of t) {
        arr[item.charCodeAt() - 97] += 1
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            return String.fromCharCode(i + 97)
        }
    }
    return new Error('没有找到重复元素')
};
console.log(findTheDifference('abcd', "abcde"));