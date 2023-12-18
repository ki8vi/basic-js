const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let amountOfNumbers = 0;
  for(let vertical = 0; vertical < matrix.length; vertical++) {
    for(let horizontal = 0; horizontal < matrix[vertical].length; horizontal++) {
      if(vertical === 0 || matrix[vertical - 1][horizontal]) {
        amountOfNumbers += matrix[vertical][horizontal]
      }    
    }
  }
  return amountOfNumbers;
}

module.exports = {
  getMatrixElementsSum
};
