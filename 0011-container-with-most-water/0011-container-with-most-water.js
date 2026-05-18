/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let square = 0
    let minHeight = 0
    while (left < right) {
        const width = right - left
        if (height[left] > height[right]) {
            minHeight = height[right]
            right--
        }
        else {
            minHeight = height[left]
            left++
        }
        const curSquare = minHeight * width
        if (square < curSquare) {
            square = curSquare
        }
    }
    return square
};