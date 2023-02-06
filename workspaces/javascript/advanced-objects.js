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

   // arrow functions and this

   /*
   We saw in the previous exercise that for a method, the calling object is the object the method belongs to. 
   If we use the this keyword in a method then the value of this is the calling object. 
   However, it becomes a bit more complicated when we start using arrow functions for methods. 
   Take a look at the example below:
   */
   const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet: () => {
      console.log(this.dietType);
    }
  };
   
  goat.diet(); // Prints undefined
  /*
  In the comment, you can see that goat.diet() would log undefined. 
  So what happened? Notice that the .diet() method is defined using an arrow function.

  Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. 
  In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.

  The key takeaway from the example above is to avoid using arrow functions when using this in a method!
  */

  // example
  const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();

// privacy

/*
Accessing and updating properties is fundamental in working with objects. 
However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. 
When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

Certain languages have privacy built-in for objects, but JavaScript does not have this feature. 
Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. 
One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. 
Here’s an example of using _ to prepend a property.
*/
const bankAccount = {
  _amount: 1000
}
// In the example above, the _amount is not intended to be directly manipulated.
// Even so, it is still possible to reassign _amount:
bankAccount._amount = 1000000;
/*
In later exercises, we’ll cover the use of methods called getters and setters. 
Both methods are used to respect the intention of properties prepended, or began, with _. 
Getters can return the value of internal properties and setters can safely reassign property values. 
For now, let’s see what happens if we can change properties that don’t have setters or getters.
*/

// example
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';
robot.recharge();