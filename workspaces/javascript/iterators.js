/* JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.
Below, we have an annoyingly long function name that hurts the readability of any code in which it’s used. 
Note: If the below function’s syntax feels unfamiliar, revisit the arrow functions exercise to refresh your knowledge on ES6 arrow notation.

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

Let’s pretend this function does important work and needs to be called repeatedly. 
To rename this function without sacrificing the source code, we can re-assign the function to a variable with a suitably short name:

const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!

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

example */

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

  