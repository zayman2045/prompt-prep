/** Given two strings, one representing a ransom note and the other representing the available letters from a magazine, determine if it's possible to construct the ransom note using only the letters from the magazine. Each letter from the magazine can be used only once.
 */

class Solution {
    canConstruct(ransomNote, magazine) {
        // Build a map from the ransomNote
        let ransomMap = {};
        for (let c of ransomNote) {
            ransomMap[c] = (ransomMap[c] || 0) + 1;
        }

        // Build a map from the magazine
        let magazineMap = {};
        for (let c of magazine) {
            magazineMap[c] = (magazineMap[c] || 0) + 1;
        }

        // Iterate through the note and compare it to the magazine
        for (let [k, v] of Object.entries(ransomMap)) {
            if (!magazineMap[k] || magazineMap[k] < v) {
                return false;
            }
        }
        return true;
    }
}

// Time complexity is O(N) because each input string is traversed once to build the maps, and then once again to compare them. Space complexity is O(k) where k is the number of unique characters in the input string