/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    const hash = new Set();
    for (let num of nums) {
        if (hash.has(num)) {
            return num
        }
        hash.add(num)
    }
    return false
};