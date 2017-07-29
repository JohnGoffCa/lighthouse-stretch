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

}

module.exports = manacher;
