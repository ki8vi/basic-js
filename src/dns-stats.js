const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const outputObj = new Object();
  for(let i = 0; i < domains.length; i++) {
    const arr = new Array();
    const splitedDomains = domains[i].split(".");
    for(let j = splitedDomains.length - 1; j >= 0 ; j--) {
      arr.push(`.${splitedDomains[j]}`);
      const joinedKey = arr.join("")
      if(!(joinedKey in outputObj)) {
        outputObj[joinedKey] = 1;
      } else {
        outputObj[joinedKey]++;
      }
    }
       
  }
  return outputObj
}

module.exports = {
  getDNSStats
};
