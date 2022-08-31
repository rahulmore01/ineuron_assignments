//  Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.

// function to convert celsius into farenheit
function celsius_to_farenheit(temp){
    let faranh = (((temp/5)*9)+32);
    console.log(`${temp}°C is ${faranh}°F`);
}
// function to convert farenheit into celsius
function farenheit_to_celsius(faranh){
    let temp = 5*((faranh-32)/9);
    console.log(`${faranh}°F is ${temp}°C`);
}
// calling the functions as per the requirements
// change your temp parameter for conversion
celsius_to_farenheit(60)
// change your faranh parameter for conversion
farenheit_to_celsius(45)

