/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // Get lenghts of both strings
  let n1 = s.length;
  let n2 = t.length;
  let _s = s.split('');
  let _t = t.split('');

  // If length of both strings is not same,
  // then they cannot be anagram
  if (n1 != n2) return false;

  // Sort both strings
  _s.sort();
  _t.sort();

  // Compare sorted strings
  for (let i = 0; i < n1; i++) if (_s[i] != _t[i]) return false;

  return true;
};
