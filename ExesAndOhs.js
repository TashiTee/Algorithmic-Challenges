// check to see if a string has the same amount of 'x's and 'o's
// method returns a boolean and be case insensitive.

function XO(str) {
let xCount = 0;
let oCount = 0;

for (let i =0; i <str.length; i++) {
    if (str[i].toLowerCase() === 'x' ) {
      xCount++;
    }
    if (str[i].toLowerCase() === 'o' ) {
      oCount++;
    }
}

  if (xCount === 0 && oCount === 0) {
    return true;
  }else if  (xCount === oCount)  {
    return true ;
  }else {
    return false;
  }
}

console.log(XO("ooxx"));
console.log(XO("ooxxx"));
console.log(XO("ooxX"));
console.log(XO("zzzpppp")); // when no x or o should return true 
console.log(XO("zzoo"));
