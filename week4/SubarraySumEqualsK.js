/* 
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/


var subarraySum = function (nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;

    // pre-fill with sum of 0
    map.set(0, 1);  // (sum, occurrences) 

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        };

        // update map w sums 
        const occurred = map.get(sum) || 0;
        map.set(sum, occurred + 1);

    };

    return count;
};