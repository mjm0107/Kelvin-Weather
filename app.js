//constant variable for kelvin temps
const Kelvin = 0;

//Kelvin - 273 equals celsius then its stored
const celsius = Kelvin - 273;

//celsius to fahrenheit conversion method 
let fahrenheit = celsius * (9/5) + 32;

//rounding system for Celsius conversion
fahrenheit = Math.floor(fahrenheit);

console.log(`the temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
