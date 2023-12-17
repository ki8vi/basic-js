const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringedN = String(n);
  const arrOfNumbers = [];
  for(let i = 0; i < stringedN.length; i++) {
    arrOfNumbers.push(Number(stringedN.replace(stringedN[i], "")));   
  }
  return arrOfNumbers.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
