// introduction to eterators

/*
Imagine you had a grocery list and you wanted to know what each item on the list was. 
You’d have to scan through each row and check for the item. 
This common task is similar to what we have to do when we want to iterate over, or loop through, an array. 
One tool at our disposal is the for loop. 
However, we also have access to built-in array methods which make looping easier.

The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. 
Iterators are methods called on arrays to manipulate elements and return values.
*/

// example

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

// .forEach() method

// .forEach() will execute the same code for each element of an array.

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];
groceries.forEach(function(groceryItem) {
    console.log(' - ' + groceryItem);
})

/* 
1. groceries.forEach() calls the forEach method on the groceries array.
2. .forEach() takes an argument of callback function. 
Remember, a callback function is a function passed as an argument into another function.
3. .forEach() loops through the array and executes the callback function for each element. 
During each execution, the current element is passed as an argument to the callback function.
4. The return value for .forEach() will always be undefined.
*/

// Another way to pass a callback for .forEach() is to use arrow function syntax.
groceries.forEach(groceryItem => console.log(groceryItem));

// We can also define a function beforehand to be used as the callback function.

function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);

/* The above example uses a function declaration but you can also use a function expression or arrow function as well.

All three code snippets do the same thing. 
In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator. 
It’s good to be aware of the different ways to pass in callback functions as arguments in iterators because developers have different stylistic preferences. 
Nonetheless, due to the strong adoption of ES6, we will be using arrow function syntax in the later exercises. */

// example
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log('I want to eat a ' + fruit));

// .map() method

// When .map() is called on an array, it takes an argument of a callback function and returns a new array!

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

// .map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.
/*
numbers is an array of numbers.
bigNumbers will store the return value of calling .map() on numbers.
numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.

If we take a look at numbers and bigNumbers:
*/
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

// Notice that the elements in numbers were not altered and bigNumbers is a new array.

// example

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0])

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(numbers => {
  return numbers / 100;
})

// .filter() method

/*
.filter() returns an array of elements after filtering out certain elements from the original array. 
The callback function for the .filter() method should return true or false depending on the element that is passed to it. 
The elements that cause the callback function to return true are added to the new array.
*/

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

// words is an array that contains string elements.
// const shortWords = declares a new variable that will store the returned array from invoking .filter().
// The callback function is an arrow function that has a single parameter, word. Each element in the words array will be passed to this function as an argument.
// word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.

// Let’s also check the values of words and shortWords:

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

// Observe how words was not mutated, i.e. changed, and shortWords is a new array.

// example

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

// .filterIndex() method

/*
We sometimes want to find the location of an element in an array. 
That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
*/

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

// jumbledNums is an array that contains elements that are numbers.
// const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
// The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
// num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

// Let’s take a look at what lessThanTen evaluates to:
console.log(lessThanTen); // Output: 3
// If we check what element has index of 3:
console.log(jumbledNums[3]); // Output: 5

/*
Great, the element in index 3 is the number 5. 
This makes sense since 5 is the first element that is less than 10.
If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.
*/

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
 
console.log(greaterThan1000); // Output: -1

// example
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
})

// .reduce() method

// The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums) // Output: 17

// Here are the values of accumulator and currentValue as we iterate through the numbers array:
/*
Iteration	accumulator	currentValue	return value
First	1	2	3
Second	3	4	7
Third	7	10	17
*/

// numbers is an array that contains numbers.
// summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
// numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
// The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.
// As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.

// The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance:
const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117

// Here’s an updated chart that accounts for the second argument of 100:
/*
Iteration #	accumulator	currentValue	return value
First	100	1	101
Second	101	2	103
Third	103	4	107
Fourth	107	10	117
*/

// example
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue
}, 10)
console.log(newSum);

// example
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
})


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => { 
  return word.length >5;
} ));

// example
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

/*
Output:
Have you visited Orlando?
Have you visited Dubai?
Have you visited Edinburgh?
Have you visited Chennai?
Have you visited Accra?
Have you visited Denver?
Have you visited Eskisehir?
Have you visited Medellin?
Have you visited Yokohama?
CODECADEMY
*/