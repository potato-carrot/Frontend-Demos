/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (!Array.isArray(nums) || val === void 0) {
        throw new Error('请输入一个数组')
    }
    if (nums.length === 0) {
        return 0
    }

    let l = 0
    let r = nums.length - 1
    while (l < r) {
        while (l < r && nums[l] !== val) {
            l++
        }
        while (l < r && nums[r] === val) {
            r--
        }

        // 交换
        let temp = nums[r]
        nums[r] = nums[l]
        nums[l] = temp
    }

    if (nums[l] === val) {
        return l
    } else {
        return l + 1
    }

};

console.log(removeElement([3, 2, 2, 3], 3));