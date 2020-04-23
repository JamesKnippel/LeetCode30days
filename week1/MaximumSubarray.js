/* 
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


*/

// Kadane's Algo in O(n)

let maxSubArray = a => {
    let sum = -Infinity;
    let max = -Infinity;
    for (let i = 0; i < a.length; i++) {
        sum = Math.max(sum + a[i], a[i]);
        max = Math.max(max, sum);
    }
    return max;
};
