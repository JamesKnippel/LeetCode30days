/*
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

 */

var maxPathSum = function (root) {
    let max = root.val;

    const traverse = node => {

        const left = node.left ? traverse(node.left) : 0;
        const right = node.right ? traverse(node.right) : 0;
        const val = node.val;

        max = Math.max(
            max,
            val,
            val + left,
            val + right,
            val + left + right);

        return Math.max(val, val + Math.max(left, right));
    }

    traverse(root);

    return max;
};


// Doyle's Version
// var maxPathSum = function (root) {
//     let max = -Infinity;

//     const traverse = node => {
//         if (!node) return null;

//         const left = traverse(node.left);
//         const right = traverse(node.right);
//         const val = node.val;

//         // both ok
//         if (left !== null && right !== null) {
//             max = Math.max(max, val, left + val, right + val, left + val + right);
//             return Math.max(val, val + Math.max(left, right));

//             // only left
//         } else if (left !== null) {
//             max = Math.max(max, val, left + val);
//             return Math.max(val, val + left);

//             // only right
//         } else if (right !== null) {
//             max = Math.max(max, val, right + val);
//             return Math.max(val, val + right);

//             // both leaves are bad
//         } else {
//             max = Math.max(max, val);
//             return val;
//         }
//     }

//     traverse(root);

//     return max;
// };