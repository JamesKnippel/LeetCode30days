/* 
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

var numIslands = function (grid) {
    let numberOfIslands = 0;

    if (grid === null || grid.length === 0) {
        return 0;
    };

    let dfs = function (someGrid, someColumnIndex, someRowIndex) {
        if (someColumnIndex < 0 || someColumnIndex >= someGrid.length || someRowIndex < 0 || someRowIndex >= someGrid[someColumnIndex].length || someGrid[someColumnIndex][someRowIndex] === '0') {
            return 0;
        }

        someGrid[someColumnIndex][someRowIndex] = '0';
        dfs(someGrid, someColumnIndex + 1, someRowIndex);
        dfs(someGrid, someColumnIndex - 1, someRowIndex);
        dfs(someGrid, someColumnIndex, someRowIndex + 1);
        dfs(someGrid, someColumnIndex, someRowIndex - 1);
        return 1;
    };



    for (let column = 0; column < grid.length; column++) {
        for (let row = 0; row < grid[column].length; row++) {
            if (grid[column][row] === '1') { // index at (column,row)
                // we have reached land, island or otherwise
                numberOfIslands += dfs(grid, column, row);
            }
        }
    }
    return numberOfIslands;
};