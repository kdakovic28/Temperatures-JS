//forecast today is 293 Kelvin
const kelvin = 293;
// celsius is 273 less than Kelvin
const celsius = kelvin - 273;
//Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//we used floor math method to round up number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees.`);

