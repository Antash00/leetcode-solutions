/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false
    }
    switch (typeof obj) {
        case 'undefined':
            return false
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'string':
        case 'symbol':
            return Object(obj) instanceof classFunction
        default:
            return obj instanceof classFunction
    }

    return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */