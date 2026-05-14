/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
    const result = []
    outerLoop: for (let i = 0; i < nums.length; i++) {
        for (let x = 0; x < nums[i]; x++) {
            if ((x | (x + 1)) === nums[i]){
                result.push(x)
                continue outerLoop
            }
        }
        result.push(-1)
    }
    return result
};