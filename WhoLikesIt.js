// create a simillar "like" system from facebook and other pages.

function likes(names) {
  switch(names.length) {
     
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${names[0]} likes this`;
      break; 
    case 2:
      return `${names[0]} and ${names[1]} like this`
      break;
  }

  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} like this`
  }
}

// console.log(likes([]));
// // must be "no one likes this"

// console.log(likes(["Peter"]));
// // must be "Peter like this"

console.log(likes(["Jacob", "Alex"]));
// must be "Jacob and Alex like this"

// likes(["Max", "John", "Mark"])
// must be "Max, John and Mark like this"

// likes(["Alex", "Jacob", "Mark", "Max"])
// must be "Alex, Jacob and 2 others like this" 