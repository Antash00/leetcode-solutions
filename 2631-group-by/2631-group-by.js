/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const groups = {};
    let sort;
    for (let i = 0; i < this.length; i++) {
        sort = fn(this[i])
        if (!groups[sort]) {
            groups[sort] = []
        }
        groups[sort].push(this[i])
    }
    return groups;
};

/**
 *  // {"1":[1],"2":[2],"3":[3]}
 */