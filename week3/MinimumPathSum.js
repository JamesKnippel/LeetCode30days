/* 
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

var minPathSum = function (grid) {   // grid[row][col]
    let gridRows = grid.length;     // 2 rows
    let gridColumns = grid[0].length;   // 3 cols

    let sumGrid = new Array(gridRows);
    for (let i = 0; i < gridRows; i++) {
        sumGrid[i] = new Array(gridColumns)
    }

    sumGrid[0][0] = grid[0][0];

    for (let i = 1; i < gridColumns; i++) {
        sumGrid[0][i] = sumGrid[0][i - 1] + grid[0][i];
    }

    for (let i = 1; i < gridRows; i++) {
        sumGrid[i][0] = sumGrid[i - 1][0] + grid[i][0];
    }

    console.log('populated row and column', sumGrid)


    for (let i = 1; i < gridColumns; i++) {
        for (let j = 1; j < gridRows; j++) {
            sumGrid[j][i] = grid[j][i] + Math.min(sumGrid[j - 1][i], sumGrid[j][i - 1]);
        }
    }
    return sumGrid[gridRows - 1][gridColumns - 1]
};


/* 
    grid[row][column]
    grc grc grc grc grc grc GRID ROW COLUMNS!!!!!!!!!!!!
    
grid[j][i] + Math.min(sumGrid[j-1][i], sumGrid[j][i-1]);
 2                     3                       4

grid[j][i] + Math.min(sumGrid[j-1][i], sumGrid[j][i-1]);
1                       8                       5
[
    [1,2,5],
    [3,2,1]
]

[
    [1,3,8]
    [4,5,6]
]
*/