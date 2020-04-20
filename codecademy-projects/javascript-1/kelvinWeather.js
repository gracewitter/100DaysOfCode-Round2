//set value for kelvin
const kelvin = 0;
//convert kelvin to celsius
let celsius = kelvin - 273;
//convert celsius to fahrenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32);
let newton = Math.floor(celsius * (33/100));

console.log(`the temperature is ${fahrenheit} degrees Fahrenheit. and ${newton} degrees newton`)
