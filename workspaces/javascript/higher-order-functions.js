// functions as data

/*
JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.
Below, we have an annoyingly long function name that hurts the readability of any code in which it’s used. 
Note: If the below function’s syntax feels unfamiliar, revisit the arrow functions exercise to refresh your knowledge on ES6 arrow notation.
*/
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};
/*
Let’s pretend this function does important work and needs to be called repeatedly. 
To rename this function without sacrificing the source code, we can re-assign the function to a variable with a suitably short name:
*/
const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!
/*
busy is a variable that holds a reference to our original function. 
If we could look up the address in memory of busy and the address in memory of announceThatIAmDoingImportantWork they would point to the same place. 
Our new busy() function can be invoked with parentheses as if that was the name we originally gave our function.

Notice how we assign announceThatIAmDoingImportantWork without parentheses as the value to the busy variable. 
We want to assign the value of the function itself, not the value it returns when invoked.

In JavaScript, functions are first class objects. 
This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

Since functions are a type of object, they have properties such as .length and .name, and methods such as .toString(). 
You can see more about the methods and properties of functions in the documentation.

Functions are special because we can invoke them, but we can still treat them like any other type of data. 
Let’s get some practice doing that!
*/

// example

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  isTwoPlusTwo();
  console.log(isTwoPlusTwo.name);

// functions as parameters

/*
A higher-order function is a function that either accepts functions as parameters, returns a function, or both! 
We call functions that get passed in as parameters callback functions. 
Callback functions get invoked during the execution of the higher-order function.

When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. 
Invoking it would evaluate to passing in the return value of that function call. 
With callback functions, we pass in the function itself by typing the function name without the parentheses:
*/

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);
/*
We wrote a higher-order function higherOrderFunc that accepts a single parameter, param. 
Inside the body, param gets invoked using parentheses. 
And finally, a string is returned, telling us the name of the callback function that was passed in.

Below the higher-order function, we have another function aptly named anotherFunc. 
This function aspires to be called inside the higher-order function.

Lastly, we invoke higherOrderFunc(), passing in anotherFunc as its argument, thus fulfilling its dreams of being called by the higher-order function.
*/

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});

// In this example, we invoked higherOrderFunc() with an anonymous function (a function without a name) that counts to 10. Anonymous functions can be arguments too!

// example

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
const checkA = val + 2;
const checkB = func(val);
if (checkA === checkB) {
  return func(val);
} else {
  return 'inconsistent results';
}
}


console.log(checkConsistentOutput(addTwo, 10));