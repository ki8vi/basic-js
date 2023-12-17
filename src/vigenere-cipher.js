const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isNotReverse = true) {
    this.isNotReverse = isNotReverse;
  }
  alphabetic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  encrypt(sentence, key) {
    if(!(sentence && key)) {
      throw new Error("Incorrect arguments!")
    }
    sentence = sentence.toUpperCase();
    key = key.toUpperCase();
    const expandedKeyAndSentence = this.expandKey(key, sentence);
    let finalStr = []
    for(let i = 0; i < expandedKeyAndSentence.sentence.length; i++) {
      if(/[A-Z]/.test(expandedKeyAndSentence.sentence[i])) {
        finalStr.push(this.alphabetic[(this.alphabetic.indexOf(expandedKeyAndSentence.sentence[i]) + this.alphabetic.indexOf(expandedKeyAndSentence.key[i])) % 26])
      } 
    }
    for(let i = 0; i < sentence.length; i++) {
      if(/[^A-Z]/.test(sentence[i])) {
        finalStr.splice(i, 0, sentence[i])
      }
    }
    if(!this.isNotReverse) {
      finalStr.reverse()
    }
    return finalStr.join("")
  }
 
  decrypt(sentence, key) {
    if(!(sentence && key)) {
      throw new Error("Incorrect arguments!")
    }
    sentence = sentence.toUpperCase();
    key = key.toUpperCase();
    const expandedKeyAndSentence = this.expandKey(key, sentence);
    
    let finalStr = []
    for(let i = 0; i < expandedKeyAndSentence.sentence.length; i++) {
      if(/[A-Z]/.test(expandedKeyAndSentence.sentence[i])) {
        if((this.alphabetic.indexOf(expandedKeyAndSentence.sentence[i]) - this.alphabetic.indexOf(expandedKeyAndSentence.key[i])) % 26 < 0) {
          finalStr.push(this.alphabetic[((this.alphabetic.indexOf(expandedKeyAndSentence.sentence[i]) - this.alphabetic.indexOf(expandedKeyAndSentence.key[i])) + 26) % 26])
        } else {
          finalStr.push(this.alphabetic[(this.alphabetic.indexOf(expandedKeyAndSentence.sentence[i]) - this.alphabetic.indexOf(expandedKeyAndSentence.key[i])) % 26])
        }
        
      } 
    }
    for(let i = 0; i < sentence.length; i++) {
      if(/[^A-Z]/.test(sentence[i])) {
        finalStr.splice(i, 0, sentence[i])
      }
    }
    if(!this.isNotReverse) {
      finalStr.reverse()
    }
    return finalStr.join("")
  }
  expandKey(key, sentence) {
    const clearedSentence = sentence.replace(/[^A-Z]/g, '');
    let expandedKey = "";
    let index = 0;
    while(expandedKey.length !== clearedSentence.length) {
      expandedKey += key[index];
      index++
      if(index >= key.length) {
        index = 0
      }
    }
    return {
      sentence: clearedSentence,
      key: expandedKey
    };
  }
}

module.exports = {
  VigenereCipheringMachine
};
