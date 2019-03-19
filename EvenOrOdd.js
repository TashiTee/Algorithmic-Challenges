function checkEvenOrOdd(num) {
if (num % 2 === 0) {
  return "Even";
}
else {
  return "Odd";
}
}

// ternary operator
function checkEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOrOdd(9));
console.log(checkEvenOrOdd(2));