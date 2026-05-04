/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr
    }
    const flatArray = function (arr, curDepth) {
        let flatArrayResult = []
        for (let el of arr) {
            if (!Array.isArray(el) || curDepth >= n) {
                flatArrayResult.push(el)
            } else {
                flatArrayResult.push(...flatArray(el, curDepth + 1))
            }
        }
        return flatArrayResult
    }
    return flatArray(arr, 0, n)
}
