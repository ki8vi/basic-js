const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  initialArray: new Array(),
  getLength() {
    return this.initialArray.length;
  },
  addLink(value) {
    if(value === undefined) {
      this.initialArray.push("()")
    } else {
      this.initialArray.push("(" + " " + value + " " + ")")
    }
    
    return this
  },
  removeLink(position) {
    if (!this.initialArray[position - 1] && !(position instanceof Number)) {
      this.initialArray = new Array()
      throw new Error("You can't remove incorrect link!");
    } else {
      this.initialArray.splice((position - 1), 1);
      return this
    }
  },
  reverseChain() {
    this.initialArray.reverse();
    return this
  },
  finishChain() {
    const finishOutput = this.initialArray.join('~~')
    this.initialArray = []
    return finishOutput;
  }
};

module.exports = {
  chainMaker
};
