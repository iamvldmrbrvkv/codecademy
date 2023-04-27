/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/

// Write function below
const subLength = (str, char) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      arr.push(i)
      //console.log(i)
    }
  }
  if (arr.length < 2 || arr.length > 2) {
      return 0;
    }
  return arr[1] - arr[0] + 1;
  //console.log(arr);
  //console.log(arr.length);
};

console.log(subLength('Saturday', 'a'));
console.log(subLength('summer', 'm'));
console.log(subLength('digitize', 'i'));
console.log(subLength('cheesecake', 'k'));