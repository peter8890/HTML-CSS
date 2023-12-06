/*2. Math Object
Write a script that ask the user to
• Enter the value of a circle’s radius in order to calculate its area
• Enter another value to calculate its square root and alert the result 
• Enter an angle to calculate its cos value then display the output in 
the console.*/
var Radius = prompt("Enter The Radius Of Circle:");
var Area = Math.PI.toFixed(2) * Math.pow(Radius, 2);   /////3.14*N^2
console.log("The Area Of The Circle Is : " + Area);

var inputValue = prompt("Enter Value To Calculate Square Root:");
var squareRoot = Math.sqrt(parseFloat(inputValue));
alert("The Square Root Is: " + squareRoot);

var angle = prompt("Enter An Angle In Degrees To Calculate Cosine:");
var cosValue = Math.cos((Math.PI.toFixed(2) *  parseFloat(angle) ) / 180);
console.log("The Cosine Of Degree Is: " + cosValue);