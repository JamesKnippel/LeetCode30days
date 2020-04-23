/* 
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 */

var groupAnagrams = function (strs) {
    let strMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        let anagram = [...strs[i]].sort().join('');
        if (strMap.has(anagram)) {
            strMap.get(anagram).push(strs[i])
        } else {
            strMap.set(anagram, [strs[i]])
        }
    }

    return [...strMap.values()];

};