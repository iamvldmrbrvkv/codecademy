const kelvin = 777;
// forecast for today
let celsius = kelvin - 273;
// forecast in celsius
let fahrenheit = celsius * (9 / 5) + 32;
// forecast in fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
// Math.floor
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
