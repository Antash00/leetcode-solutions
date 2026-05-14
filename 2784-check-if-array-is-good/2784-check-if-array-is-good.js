/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    const n = nums.length
    const sortedNums = nums.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i++) {
        if (sortedNums[i] !== i + 1) {
            return false;
        }
    }

    return sortedNums[n - 1] === n - 1;
};