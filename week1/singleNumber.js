/* 

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4

*/


// var singleNumber = function(nums) {

//     nums.sort();
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i+1] && nums[i-1] !== nums[i]){
//             return nums[i]
//         }
//     }
// };


var singleNumber = function (nums) {

    let store = {};
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (store[nums[i]]) {
            store[nums[i]] = store[nums[i]] + 1;
        } else {
            store[nums[i]] = 1;
        }
    }

    for (numi in store) {
        if (store[numi] === 1) {
            return numi;
        }
    }
};