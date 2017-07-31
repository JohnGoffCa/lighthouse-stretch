/** Implementation of Manacher's algrithim in JavaScript
 * from Wikipedia:
 * Let:
 * *s be a string of N characters
 * *s2 be a derived string of s, comprising N * 2 + 1 elements, with each element corresponding to one of the following: the N characters in s, the N-1 boundaries among characters, and the boundaries before and after the first and last character respectively
 * *A boundary in s2 is equal to any other boundary in s2 with respect to element matching in palindromic length determination
 * *p be an array of palindromic span for each element in s2, from center to either outermost element, where each boundary is counted towards the length of a palindrome (e.g. a palindrome that is three elements long has a palindromic span of 1)
 * *c be the position of the center of the palindrome currently known to include a boundary closest to the right end of s2 (i.e., the length of the palindrome = p[c]*2+1)
 * *r be the position of the right-most boundary of this palindrome (i.e., r = c + p[c])
 * *i be the position of an element (i.e., a character or boundary) in s2 whose palindromic span is being determined, with i always to the right of c
 * *i2 be the mirrored position of i around c (e.g., {i, i2} = {6, 4}, {7, 3}, {8, 2},… when c = 5 (i.e., i2 = c * 2 - i)
 */
function manacher(s) {
  if (!s)
    return "";
  
  var s2 = addBoundaries(s.split(""));
  var p = [];
  let c = 0;
  let r = 0;
  let m = 0;
  let n = 0;

  for (let i = 1; i < s2.length; i++) {
    if (i > r) {
      p[i] = 0; 
      m = i - 1;
      n = i + 1;
    } else {
      let i2 = c * 2 - i;

      if (p[i2] < (r - i - 1)) {
        p[i] = p[i2];
        m = -1;
      } else {
        p[i] = r - i;
        n = r + 1;
        m = i * 2 - n;
      }
    }

    while (m >= 0 && n < s2.length && s2[m] === s2[n]) {
      p[i]++;
      m -= 1;
      n++;
    }
    
    if ((i + p[i]) > r) {
      c = i;
      r = i + p[i];
    }
  }

  let len = 0;
  c = 0;
  for (let i = 1; i < s2.length; i++) {
    if (len < p[i]) {
      len = p[i];
      c = i;
    }
  }

  let ss = s2.slice(c - len, c + len + 1);
  let result = removeBoundaries(ss).join("");
  if (result.length < 2)
    return "";
  return result;
}

function addBoundaries(cs) {
  if (!cs) 
    return "||".split("");

  let cs2 = [];
  for (let i = 0; i < (cs.length * 2); i += 2) {
    cs2[i] = '|';
    cs2[i + 1] = cs[i / 2];
  }
  cs2[cs.length * 2] = '|';
  return cs2;
}

function removeBoundaries(cs) {
  if (!cs)
    return [""];

  let cs2 = [];
  for (let i = 0; i < ((cs.length - 1) / 2); i++) {
    cs2[i] = cs[i * 2 + 1];
  }
  return cs2;
}

module.exports = manacher;
