/**
 * Given a string, determine the length of the longest palindrome that can be constructed using the characters from the string. You don't need to return the palindrome itself, just its maximum possible length.
 */

// To create a palindrome we need to create a list of char frequencies and total the even numbers and the highest odd number

class Solution {
    longestPalindrome(s) {
        let length = 0;

        // Build a map of char frequencies
        let map = new Map();
        for (let i = 0; i < s.length; i++) {
            let c = s[i];
            map.set(c, (map.get(c) || 0) + 1);
        }
        console.log(map);

        // Get a list of the frequencies
        let freqList = Array.from(map.values());

        // Total up the even frequencies and the highest odd.
        let highestOdd = 0;
        for (let i = 0; i < freqList.length; i++) {
            let n = freqList[i];
            if (n % 2 == 0) {
                length += n;
            } else {
                highestOdd = Math.max(highestOdd, n);
            }
        }

        return length + highestOdd;
    }
}

let sol = new Solution();
let result = sol.longestPalindrome("applepie");
console.log(result);