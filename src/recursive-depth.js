const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!(arr instanceof Array)) {
      return 0;
    }
    let depthAmount = 0;
    for (let i = 0; i < arr.length; i++) {
      const depth = this.calculateDepth(arr[i]);
      if (depth > depthAmount) {
        depthAmount = depth
      }
    }
    return depthAmount + 1;
  }
}

module.exports = {
  DepthCalculator
};
