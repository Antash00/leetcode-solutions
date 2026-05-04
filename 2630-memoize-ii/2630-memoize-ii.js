/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        let currentCache = cache;
        for (const arg of args) {
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }
            currentCache = currentCache.get(arg);
        }
        const RESULT_KEY = '__res__';
        if (currentCache.has(RESULT_KEY)) {
            return currentCache.get(RESULT_KEY);
        }
        const result = fn(...args);
        currentCache.set(RESULT_KEY, result);
        return result;
    };
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */