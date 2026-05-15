/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let windowSum = 0

    for (let i = 0; i < k; i++) {
        windowSum += nums[i]
    }

    let maxSum = windowSum

    for (let right = k; right < nums.length; right++) {
        windowSum += nums[right]
        windowSum -= nums[right - k]

        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum / k
};