/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        let result = [];
        for (let item of obj) {
            if (Boolean(item)) {
                if (typeof item === "object") {
                    result.push(compactObject(item));
                } else {
                    result.push(item);
                }
            }
        }
        return result;
    } else {
        for (let key in obj) {
            if (!Boolean(obj[key])) {
                delete obj[key];
            }
            else if (typeof obj[key] === "object") {
                obj[key] = compactObject(obj[key]);
            }
        }
        return obj;
    }
};