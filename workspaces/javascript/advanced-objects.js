// the this keyword

// Objects are collections of related data and functionality. We store that functionality in methods on our objects:
const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    }
  };
// In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.
goat.makeSound(); // Prints baaa
/*
Nice, we have a goat object that can print baaa to the console. 
Everything seems to be working fine. 
What if we wanted to add a new method to our goat object called .diet() that prints the goat‘s dietType?
*/
const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(dietType);
    }
  };
  goat.diet(); 
  // Output will be "ReferenceError: dietType is not defined"
/*
That’s strange, why is dietType not defined even though it’s a property of goat? 
That’s because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object.

Here’s where the this keyword comes to the rescue. If we change the .diet() method to use the this, the .diet() works! :
*/
const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
  };
   
  goat.diet(); 
  // Output: herbivore
/*
The this keyword references the calling object which provides access to the calling object’s properties. 
In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.
*/

// example
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
   };
   
   console.log(robot.provideInfo());