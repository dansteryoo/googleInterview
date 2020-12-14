/*

sample input: string = "clementisacap"
sample output: "mentisac"

*/

// O(n) time | O(min(n, a) space
function longestSubstringWithoutDuplication(string) {
    const lastSeen = {};
    let longest = [0, 1];
    let startIndex = 0;

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char in lastSeen) {
            startIndex = Math.max(startIndex, lastSeen[char] + 1);
        }
        if (longest[1] - longest[0] < i + 1 - startIndex) {
            longest = [startIndex, i + 1];
        }
        lastSeen[char] = i;
    }
    return string.slice(longest[0], longest[1])
}
