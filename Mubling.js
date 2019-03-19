//  accum("abcd");
//  accum("RqaEzty");
//  accum("cwAt"); 


// repeats the letters and capitalizes first index value
function funkyCapitalize(letter, num) {
  let result = "";
  for (let i =0; i< num; i++ ) {
     if (i === 0) {
      result += letter.toUpperCase();
    } else {
    result += letter.toLowerCase(); 
  }
  // result += i === 0 ? letter.toUpperCase() : letter.toLowerCase();
}
return result;
}

function accum(str) {
  let result = [];
  let letters = str.split(""); // split each character
  let counter = 1;

  for (let letter of letters) {
    result.push(funkyCapitalize(letter, counter));  //repeats the letter
    counter++;
  }
  return result.join("-");  // "-"delimeter
}

console.log(accum("abcd"));