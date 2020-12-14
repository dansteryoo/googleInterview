/*

sample input: words = ['yo', 'act', 'flop', 'tac', 'cat', 'oy', 'olfp']
sample output: [['yo', 'oy'], ['flop', 'olfp'], ['act', 'tac', 'cat']]

*/

// O(w * n * log(n) + n * w * log(w)) time | O(wn) space - where w is the number 
// of words and n is the length of the longest word

function groupAnagrams(words) {
    if (words.length === 0) return [];

    const sortedWords = words.map(word => word.split('').sort().join(''));
    const indices = [ ...Array(words.length).keys()];
    indices.sort((a, b) => {
        if (sortedWords[a] < sortedWords[b]) return -1;
        if (sortedWords[a] > sortedWords[b]) return 1;
        return 0
    });

    const result = [];
    let currentAnagramGroup = [];
    let currentAnagram = sortedWords[indices[0]];
    for (const index of indices) {
        const word = words[index];
        const sortedWord = sortedWords[index];

        if (sortedWord === currentAnagram) {
            currentAnagramGroup.push(word);
            continue;
        }

        result.push(currentAnagramGroup);
        currentAnagramGroup = [word];
        currentAnagram = sortedWord;
    }

    result.push(currentAnagramGroup);
    return result;
}


// O(w * n * log(n)) time | O(wn) space - where w is the number 
// of words and n is the length of the longest word

function groupAnagrams(words) {
    const anagrams = {};

    for (const word of words) {
        const sortedWord = word.split('').sort().join('');

        if (sortedWord in anagrams) {
            anagrams[sortedWord].push(word);
        } else {
            anagrams[sortedWord] = [word]
        }
    }
    return Object.values(anagrams)
}