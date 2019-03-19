function getMiddle(str) {
  if (str.length % 2 === 0) {
    return str.slice((str.length / 2) -1, (str.length / 2) + 1);
    // return str[str.length/2 -1] + str[str.length /2];
  }
  return str[Math.floor(str.length / 2)]; 
} 

console.log(getMiddle("testii"));
console.log(getMiddle("abcdefghijk"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));