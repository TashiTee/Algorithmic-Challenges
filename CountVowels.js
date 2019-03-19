// return the number of count of vowels in the given string


function countVowels(str) {
	const vowels = "aeiou";
	let counter = 0;

	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i]) === true) {

			// or use for of for loop
			// for (let elem of str) {
			// if (vowels.includes(elem) === true) {

			counter++;
		}
	}
	return counter;
}

console.log(countVowels("racecar"));

//  let vowels = "aeiou"

// for (let i=0; i<vowels.length; i++) {
// 	console.log(vowels[i])
// }
// // or we can use for of for loop
// for (let elem of vowels) {
// console.log(elem);
// }
