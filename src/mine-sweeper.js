const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const outputArray = new Array();
  let amountOfMatch;
  for(let vertical = 0; vertical < matrix.length; vertical++) {
    outputArray[vertical] = new Array();
    for(let horizontal = 0; horizontal < matrix[0].length; horizontal++) {
      amountOfMatch = 0
      for (let vericalSibl = vertical - 1; vericalSibl <= vertical + 1; vericalSibl++) {
        for (let horizontalSibl = horizontal - 1; horizontalSibl <= horizontal + 1; horizontalSibl++) {
          if (vericalSibl === vertical && horizontalSibl !== horizontal || vericalSibl !== vertical && vericalSibl >= 0 && vericalSibl < matrix.length && horizontalSibl >= 0 && horizontalSibl <= matrix[0].length) {
            if(matrix[vericalSibl][horizontalSibl]) {
              amountOfMatch++;
            }
            outputArray[vertical][horizontal] = amountOfMatch;
          }
        }
      }
    }
  }
  return outputArray
}

module.exports = {
  minesweeper
};
