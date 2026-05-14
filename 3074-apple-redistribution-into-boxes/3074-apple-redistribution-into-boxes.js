/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    const sortedCapacity = capacity.sort((a, b) => b - a)
    let apples = apple.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let i = 0
    while (i < sortedCapacity.length) {
        if (apples <= 0) {
            break
        }
        apples = apples - sortedCapacity[i]
        i++
    }
    return i
};