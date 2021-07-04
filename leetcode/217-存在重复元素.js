/**
 * 另一种解法：使用new Set实现hasmap，代替Object
 * 
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if (!Array.isArray(nums)) {
        return false
    }
    const hasmap = {}
    for (let num of nums) {
        if (hasmap.hasOwnProperty(num)) {
            return true
        } else {
            hasmap[num] = 1
        }
    }

    return false
};

console.log(containsDuplicate([1, 2, 3, 1]));