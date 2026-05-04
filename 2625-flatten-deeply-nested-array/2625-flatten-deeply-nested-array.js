/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) return arr
    const result = []
    const flatArray = (array, curDepth) => {
        for (let el of array) {
            if (!Array.isArray(el) || curDepth >= n) {
                result.push(el)
            } else {
                flatArray(el, curDepth + 1)
            }
        }
    }
    flatArray(arr, 0)
    return result
}
