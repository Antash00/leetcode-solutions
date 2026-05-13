/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let joinArr = []
    const s1 = [...arr1].sort((a, b) => a.id - b.id);
    const s2 = [...arr2].sort((a, b) => a.id - b.id);
    let i = 0, j = 0;
    while (i < s1.length || j < s2.length) {

        if (i >= s1.length) {
            joinArr.push(s2[j++]);
            continue;
        }
        if (j >= s2.length) {
            joinArr.push(s1[i++]);
            continue;
        }

        const item1 = s1[i];
        const item2 = s2[j];

        if (item1.id === item2.id) {
            joinArr.push({ ...item1, ...item2 });
            i++;
            j++;
        } else if (item1.id < item2.id) {
            joinArr.push(item1);
            i++;
        } else {
            joinArr.push(item2);
            j++;
        }
    }
    return joinArr
};