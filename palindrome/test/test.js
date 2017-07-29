var assert = require("chai").assert;
var manacher = require("../palindrome");

describe("Manacher's Algorithim", () => {
  it("should return anana given bananas", () => {
    assert.strictEqual(manacher("bananas"), "anana");
  });

  it("should return an empty string given an empty string", () => {
    assert.strictEqual(manacher(""), "");
  });

  it("should return an empty string given a word with no palindromic substring longer than 1 character", () => {
    assert.strictEqual(manacher("not"), "");
  });

  it("should return ivi, ili given civilization", () => {
    assert.strictEqual(manacher("civilization"), "ivi, ili");
  });
});
