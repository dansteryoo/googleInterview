/* 

sample input: string = 'zyx', key = 2
sample output: "zab"

*/

// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let newStr = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let newIndex = (alphabet.indexOf(char) + key) % 26;
        let newChar = alphabet[newIndex];
        newStr.push(newChar)
    }

    return newStr.join('')
}

// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
    const newLetters = [];
    const newKey = key % 26;
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    for (const letter of string) {
        newLetters.push(getNewLetter(letter, newKey, alphabet))
    }

    return newLetters.join('')
}

function getNewLetter(letter, key, alphabet) {
    const newLetterCode = alphabet.indexOf(letter) + key;
    return newLetterCode <= 25 
        ? alphabet[newLetterCode]
        : alphabet[-1 + (newLetterCode % 25)];
}