/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    const lastIndex = {}

    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i
    }

    const stack = []
    const used = new Set()

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (used.has(char)) {
            continue
        }

        while (
            stack.length &&
            stack[stack.length - 1] > char &&
            lastIndex[stack[stack.length - 1]] > i
        ) {
            const removed = stack.pop()
            used.delete(removed)
        }

        stack.push(char)
        used.add(char)
    }

    return stack.join('')
};