// convert each word to start with a uppercase letter
// Non jaden-cased:"how can mirrors be real if our eyes aren't real"
// Jaden-cased "How Can Mirrors Be Real If Our Eyes Aren't Real"
// helper function
function capitalize(word) {    // capitalizes word
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function toJadenCase(str) {
  let words = str.split(" ");
  let result = [];
  for (let word of words)  {
    result.push(capitalize(word));  //add captialized words into result
  }
return result.join(" ");
  }

console.log(toJadenCase("how can mirrors be real if our eyes aren't real"));

// for (let i =0; i < words.length; i++) {
//   console.log(words[i]);


