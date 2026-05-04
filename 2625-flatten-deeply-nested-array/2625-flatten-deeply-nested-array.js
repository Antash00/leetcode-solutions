/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr
    }
    return flatArray(arr, 0, n)
}
var flatArray = function (arr, curDepth, depth) {
    let flatArrayResult = []
    for (let el of arr) {
        if (!Array.isArray(el) || curDepth >= depth) {
            flatArrayResult.push(el)
        } else {
            flatArrayResult.push(...flatArray(el, curDepth + 1, depth))
        }
    }
    return flatArrayResult
}