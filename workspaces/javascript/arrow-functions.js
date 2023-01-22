const plantNeedsWater = function(day) {
    if (day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
  };
  console.log(plantNeedsWater('Tuesday'));
  /* Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:
  const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  }; */
  const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  console.log(plantNeedsWater('Wednesday'));
  // refactoring from Lucya
  const plantNeedsWater2 = (day) => {
      return day === 'Wednesday'
  };
  console.log(plantNeedsWater2('Wednesday'));
  /* refactoring arrow functions
  if one parameter we don't need to use (), if more then one parameter or 0 we need (). */
  const plantNeedsWater = day => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  console.log(plantNeedsWater('Wednesday'));
  /* A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.*/
  const squareNum = (num) => {
    return num * num;
  };
  const squareNum = num => num * num;
  /* The parentheses around num have been removed, since it has a single parameter.
  The curly braces { } have been removed since the function consists of a single-line block.
  The return keyword has been removed since the function consists of a single-line block. */
  // example
  const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);
  const plantNeedsWater = day => day === "Wednesday" ? true : false;