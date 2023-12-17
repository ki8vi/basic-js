const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let outputStr = "",
  repeatAmount = 0,
  additionCount;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i + 1]) {
      additionCount = 1;
      repeatAmount++
    } else {
      if(repeatAmount === 0) {
        additionCount = "";
        repeatAmount = "";
      } 
      outputStr += repeatAmount + additionCount + str[i];
      repeatAmount = 0
    }
  }
  return outputStr;
}

module.exports = {
  encodeLine
};
