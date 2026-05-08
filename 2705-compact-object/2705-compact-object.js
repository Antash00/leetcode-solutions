/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    const result = obj
    if (Array.isArray(result)) {
        for (let i = result.length - 1; i >= 0; i--) {
            if (!result[i]) {
                result.splice(i, 1)
            } else if (Array.isArray(result[i]) || typeof result[i] === 'object') {
                result[i] = compactObject(result[i])
            }
        }
    } else if (typeof result === 'object') {
        for (let key in result) {
            if (!result[key]) {
                delete result[key]
            } else if (Array.isArray(result[key]) || typeof result[key] === 'object') {
                result[key] = compactObject(result[key])
            }
        }
    }
    return result
};