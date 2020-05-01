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

            /* if first row or col */
            if (col === 0 || row === 0) {
                if (matrix[row][col] === '1') {
                    /* check matrix for a 1, then set initial max to 1 */
                    grid[row][col] = '1';
                    max = Math.max(max, grid[row][col]);
                } else {
                    /* if it's a miss, write a 0 to cloned DP grid */
                    grid[row][col] = 0;
                }
            } else {
                /* check for hits on subsequent row/cols after first */
                if (matrix[row][col] === '1') {
                    /* if hit and true when calculating min of 3 surrounding coordinates, we have a square
                        1 1
                        1 target                   
                    */
                    grid[row][col] =
                        Math.min(grid[row][col - 1], grid[row - 1][col], grid[row - 1][col - 1]) + 1;
                    /* might need to update max */
                    max = Math.max(max, grid[row][col]);

                } else {
                    /*  miss, write 0 */
                    grid[row][col] = 0;
                }
            }
        }
    }
    /* return the max, squared - cus math */
    return max ** 2;
};