const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const resultArr = [...arr];
  const outputArr = [];
  for(let i = 0; i < resultArr.length; i++) {
    if(resultArr[i] === "--discard-next") {
      resultArr.splice(i, 1, null)
      if(resultArr[i + 1]) {
        resultArr.splice(i + 1, 1, null)
      }
    }
    
    if(resultArr[i] === "--discard-prev") {
      resultArr.splice(i, 1, null)
      if(resultArr[i - 1]) {
        resultArr.splice(i - 1, 1, null)
      }
    }
    if(resultArr[i] === "--double-next") {
      resultArr.splice(i, 1, null)
      if(resultArr[i + 1]) {
        resultArr.splice(i + 1, 0, resultArr[i + 1])
      }
      
    }
    if(resultArr[i] === "--double-prev") {
      resultArr.splice(i, 1, null)
      if(resultArr[i - 1]) {
        resultArr.splice(i - 1, 0, resultArr[i - 1])
      }
    }
    
  }
  for(let i = 0; i < resultArr.length; i++) {
    if(resultArr[i]) {
      outputArr.push(resultArr[i])
    }
  }
  return outputArr
}

module.exports = {
  transform
};
