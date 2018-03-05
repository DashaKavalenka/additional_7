module.exports = function solveSudoku(matrix) {
  var row = 0;
  var col = 0;
  if(run(matrix, 0, 0)){
    return matrix;
  }
}
function run(matrix, row, col) {

    var cell = findZeroes(matrix, row, col);
    row = cell[0];
    col = cell[1];
    if (row == -1) {
        return true;
    }
    for (var num = 1; num <= 9; num++) {
        if ( noMatches(matrix, row, col, num) ) {
            matrix[row][col] = num;
            if ( run(matrix, row, col) ) {
                return true;
            }
            matrix[row][col] = 0;
        }
    }
    return false;
}
function findZeroes(matrix, row, col) {
    var done = false;
    var res = [-1, -1];
    while (!done) {
        if (row == 9) {
            done = true;
        }
        else {
            if (matrix[row][col] == 0) {
                res[0] = row;
                res[1] = col;
                done = true;
            }
            else {
                if (col < 8) {
                    col++;
                }
                else {
                    row++;
                    col = 0;
                }
            }
        }
    }
    return res;
}
function noMatches(matrix, row, col, num) {
    return checkRow(matrix, row, num) && checkCom(matrix, col, num) && checkBox(matrix, row, col, num);
}
function checkRow(matrix, row, num) {
    for (var col = 0; col < 9; col++)
        if (matrix[row][col] == num)
            return false;
    return true;
}
function checkCom(matrix, col, num) {
    for (var row = 0; row < 9; row++)
    if (matrix[row][col] == num)
        return false;
    return true;
}
function checkBox(matrix, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;
    for (var r = 0; r < 3; r++)
        for (var c = 0; c < 3; c++)
            if (matrix[row + r][col + c] == num)
                return false;
    return true;
}
