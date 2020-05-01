/* 
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/
var maximalSquare = function (matrix) {
    let max = 0;

    const grid = [...Array(matrix.length),].map(col => Array(matrix[0].length));

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (col === 0 || row === 0) {
                if (matrix[row][col] === '1') {

                    grid[row][col] = '1';
                    max = Math.max(max, grid[row][col]);

                } else {
                    grid[row][col] = 0;
                }

            } else {
                if (matrix[row][col] === '1') {

                    grid[row][col] =
                        Math.min(grid[row][col - 1], grid[row - 1][col], grid[row - 1][col - 1]) + 1;
                    max = Math.max(max, grid[row][col]);

                } else {

                    grid[row][col] = 0;
                }
            }
        }
    }
    return max ** 2;
};