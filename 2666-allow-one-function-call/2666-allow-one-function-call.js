/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    const map = new Map()
    return function (...args) {
        const key = JSON.stringify(fn)
        if (map.has(key)) {
            return undefined
        } else {
            map.set(key,fn)
            return fn(...args)
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
