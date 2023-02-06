// accessing elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);

// updating value
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

// reassign const anf let
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// the .length property
/*
One of an array’s built-in properties is length and it returns the number of items in the array. 
We access the .length property just like we do with strings.
*/
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// .push() method adding items in the end of array
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// .pop() method removes the last item of an array
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

// more array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift([0]);
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1, 4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// nested arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
console.log(target);

// arrays and functions
/*
Throughout the lesson we went over arrays being mutable, or changeable. 
Well what happens if we try to change an array inside a function? 
Does the array keep the change after the function call or is it scoped to inside the function?

Take a look at the following example where we call .push() on an array inside a function. 
Recall, the .push() method mutates, or changes, an array:
*/
const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
// The flowers array that has 3 elements.
// The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
// We call addFlower() with an argument of flowers which will execute the code inside addFlower.
// We check the value of flowers and it now includes the 'lily' element! The array was mutated!
/*
So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. 
You might also see this concept explained as pass-by-reference since what we’re actually passing to the function is a reference to where the variable memory is stored and changing the memory.
*/

// example
const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}
changeArr(concept);
console.log(concept);
function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(removeElement(concept));

// nested arrays
/*
Earlier we mentioned that arrays can store other arrays. 
When an array contains another array it is known as a nested array. Examine the example below:
*/
const nestedArr = [[1], [2, 3]];
// To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
/*
Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3]. 
Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.
*/
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
/*
In the second console.log() statement, we have two bracket notations chained to nestedArr. 
We know that nestedArr[1] is the array [2, 3]. 
Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.
*/

// example
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
console.log(target);
