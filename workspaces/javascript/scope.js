/* Global scope. In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks. */
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

/* Block scope. The next context we’ll cover is block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block. */
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // Prints "blue"
};
 
logSkyColor(); // Prints "blue"
console.log(color); // throws a ReferenceError

/* We define a function logSkyColor().
Within the function, the color variable is only available within the curly braces of the function.
If we try to log the same variable outside the function, it throws a ReferenceError. */

function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}
logVisibleLightWaves();
console.log(lightWaves); // it will be "ReferenceError: lightWaves is not defined".

/* scope pulution
While it’s important to know what global scope is, it’s best practice to not define variables in the global scope. */

let num = 50;
 
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100

/* We have a variable num.
Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
When we call logNum(), num gets reassigned to 100.
The reassignment inside logNum() affects the global variable num.
Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num. */

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
 stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
console.log(callMyNightSky());
console.log(stars);

// good scoping
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // Prints "pink"
  }
  console.log(color); // Prints "blue"
};
 
console.log(color); // throws a ReferenceError
We create a variable dusk inside the logSkyColor() function.
After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.
Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.
Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace. If a variable does not need to exist outside a block— it shouldn’t! */

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
// Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.