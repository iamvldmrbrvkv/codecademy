greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}

// not hoisting
function greetWorld() {
  console.log('Hello, World!');
}
  greetWorld();
  // another
  function getReminder() {
  console.log('Water the plants');
}
function greetInSpanish() {
  console.log('Buenas tardes.');
}
getReminder();
greetInSpanish();