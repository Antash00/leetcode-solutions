/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    for (let prop in obj) {
        return false
    }
    return true
};