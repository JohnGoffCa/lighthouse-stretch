var morse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
}

function stringToMorse(string) {
  var arr = string.split("");
  var result = [];
  arr.forEach((letter) => {
    if (/\s/g.test(letter)) {
      result.push("     ");
      return;
    } 
    result.push(morse[letter.toLowerCase()]);
  });
  return result.join(" ");
}

//expects morse to be a string, with individual letters separated by a single space and words separated by 5 consecutive spaces
function morseToString(morseCode) {
  var result = [];
  var words = morseCode.split("     ");
  words.forEach((word) => {
    var letters = word.split(" ");
    letters.forEach((letter) => {
      //console.log(letter, "key:", getKeyFromValue(morse, letter));
      result.push(getKeyFromValue(morse, letter));
    });
    result.push(" ");
  });
  return result.join("");
}

//since our object is a simple associative array, we iterate through the object to look up the key
function getKeyFromValue(obj, value) {
  for (var myVal in obj) {
    //console.log("myVal", myVal, "obj", obj);
    if (obj.hasOwnProperty(myVal)) {
      if(obj[myVal] === value)
        return myVal;
    }
  }
}

console.log(stringToMorse("Hello world"));
console.log(morseToString(stringToMorse("hello world")));
