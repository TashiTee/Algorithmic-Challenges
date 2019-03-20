// write a function that takes in an array of numbers and returns the largest num
// write a function that takes in an array of numbers and returns the smallest num

function findMax(nums) {
let max = nums[0];       // first element of array is now 0
 
for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= max) {
    max = nums[i];  
  }
}

return max;
}

function findMin(nums) {
  let min = nums[0];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min) {
      min = nums[i];  
    }
  }
  
  return min;
  }

console.log("max number is " + findMax([77, -5, 20]));

console.log("min number is " + findMin([-77, 50, -200, 89, 44, 37]));