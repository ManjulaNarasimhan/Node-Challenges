// Returns count of possible paths to reach cell at row number m and column
// number n from the topmost leftmost cell (cell at 1, 1)
function numberOfPaths(m, n) {
    // Create a 2D table to store results of subproblems

    const count = Array(m).fill(null).map(() => Array(n).fill(null));


    // Count of paths to reach any cell in first column is 1
    for (let i = 0; i < m; i++)
        count[i][0] = 1;

    // Count of paths to reach any cell in first column is 1
    for (let j = 0; j < n; j++)
        count[0][j] = 1;

    // Calculate count of paths for other cells in bottom-up manner using
    // the recursive solution
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++)

            //               Rightwards      Downwards     Diagnoally right
            count[i][j] = count[i - 1][j] + count[i][j - 1] + count[i - 1][j - 1];

    }
    return count[m - 1][n - 1];
};

console.log(numberOfPaths(3, 2));

//https://www.geeksforgeeks.org/unique-paths-in-a-grid-with-obstacles/