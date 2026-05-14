/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    const hash = new Map()
    for (let i in nums) {
        if (hash.has(nums[i])) {
            return nums[i]
        }
        hash.set(nums[i])
    }
};