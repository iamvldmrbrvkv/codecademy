function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
  getFahrenheit(15); // Returns 59
  /* 
  1. create function with parameter 'number' (which we add later), then make formula which include 'number' to conver farengheit to celsius
  2. create function with parameter 'celsius' and then return previous return with parameter 'celsius' + 32. In general we can made it in a first function - number * (9/5) + 32
  3. calling getFahrenheit with 15 and it returnes 59
  */
  // example
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
  };
  const totalCost = costOfMonitors(4, 5);
  console.log(totalCost);