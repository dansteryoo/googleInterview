/* 

sample input: string = 'abcdcba'
sample output: true 

*/

// O(n) time | O(n) space
function isPalindrome(string) {
    return string.split('').reverse().join('') === string
}

// O(n) time | O(1) space
function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;

    for (let i = 0; i < string.length - 1; i++) {
        if (string[left] === string[right]) {
            left++;
            right--;
        } else {
            return false
        }
    }

    return true
}