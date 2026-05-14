/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
    const champTower = Array.from({ length: query_row + 1 }, () => Array(query_row + 1).fill(0))
    if (poured === 0) {
        return 0
    }
    champTower[0][0] = poured
    for (let i = 0; i < query_row; i++) {
        for (let j = 0; j < champTower[i].length; j++) {
            if (champTower[i][j] > 1) {
                const extra = champTower[i][j] - 1

                champTower[i][j] = 1

                champTower[i + 1][j] += extra / 2
                champTower[i + 1][j + 1] += extra / 2
            }
        }
    }

    return champTower[query_row][query_glass] > 1 ? 1 : champTower[query_row][query_glass]
};