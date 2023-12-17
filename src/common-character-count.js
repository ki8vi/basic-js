const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let obj1 = new Object(),
      obj2 = new Object();
  for(let i = 0; i < s1.length; i++) {
    if(!(s1[i] in obj1)) {
      obj1[s1[i]] = 1
    } else {
      obj1[s1[i]]++
    }
  }
  for(let i = 0; i < s2.length; i++) {
    if(!(s2[i] in obj2)) {
      obj2[s2[i]] = 1
    } else {
      obj2[s2[i]]++
    }
  }
  for(let i in obj1) {
    if(i in obj2) {
      count += new Array(obj1[i], obj2[i]).sort((a, b) => a - b)[0];
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
