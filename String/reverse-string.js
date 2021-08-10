/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  return parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);
};
