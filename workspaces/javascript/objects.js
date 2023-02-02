// creating objects literals

/*
Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:

let spaceship = {}; // spaceship is an empty object

We fill an object with unordered data. 
This data is organized into key-value pairs. 
A key is like a variable name that points to a location in memory that holds a value.

A key’s value can be of any data type in the language including functions or other objects.

We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. 
We separate each key-value pair in an object literal with a comma (,). 
Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:
*/

// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};

// The spaceship object has two properties Fuel Type and color. 'Fuel Type' has quotation marks because it contains a space character.

// example
// Write your fasterShip object literal below
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };

// accessing properties

/*
There are two ways we can access an object’s property. Let’s explore the first way— dot notation, ..

You’ve used dot notation to access the properties and methods of built-in objects and data instances:
*/
'hello'.length; // Returns 5

// With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
  };
  spaceship.homePlanet; // Returns 'Earth',
  spaceship.color; // Returns 'silver',

// If we try to access a property that does not exist on that object, undefined will be returned.
spaceship.favoriteIcecream; // Returns undefined

// example
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  let crewCount = spaceship.numCrew;
  let planetArray = spaceship.flightPath;

// bracked notation

// The second way to access a key’s value is by using bracket notation, [ ].

// You’ve used bracket notation when indexing an array:
['A', 'B', 'C'][0]; // Returns 'A'

// To use bracket notation to access an object’s property, we pass in the property name (key) as a string.

// We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.
let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5
  };
  spaceship['Active Duty'];   // Returns true
  spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
  spaceship['numCrew'];   // Returns 5
  spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

// With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:
let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

// If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.

// example
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  let isActive = spaceship['Active Mission']
  console.log(isActive);

// property assignment

/*
We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.

One of two things can happen with property assignment:

If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
If there was no property with that name, a new property will be added to the object.
It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.
*/

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

// You can delete a property from an object with the delete operator.

const spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    mission: 'Explore the universe' 
  };
  
  delete spaceship.mission;  // Removes the mission property

// example
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceship.color = 'glorious gold';
  spaceship.numEngines = 1, 2 ,3, 4, 5, 6, 7, 8, 9, 10;
  delete spaceship['Secret Mission'];

// methods

/*
When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

Do object methods seem familiar? That’s because you’ve been using them all along! For example console is a global JavaScript object and .log() is a method on that object. Math is also a global JavaScript object and .floor() is a method on it.

We can include methods in our object literals by creating ordinary, colon-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.
*/

const alienShip = {
    invade: function () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };

// With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
const alienShip = {
    invade () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };

// Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

// example
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
alienShip.retreat();
alienShip.takeOff();

// nested objects