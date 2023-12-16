const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str)
  options.addition =  (typeof options.addition === "boolean" || typeof options.addition !== "null") && options.addition !== undefined ? String(options.addition) : ""
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1
  options.additionRepeatTimes =  options.additionRepeatTimes ?  options.additionRepeatTimes : 1
  options.separator = options.separator ? options.separator : "+"
  options.additionSeparator = options.additionSeparator ? options.additionSeparator : "|"
  const finalArr = [];
  const addition = []
  for(let i = 0; i < options.additionRepeatTimes; i++) {
    addition.push(options.addition)
  }
  for(let i = 0; i < options.repeatTimes; i++) {
    finalArr.push(str + addition.join(options.additionSeparator))
  }
  return finalArr.join(options.separator)
}

module.exports = {
  repeater
};
