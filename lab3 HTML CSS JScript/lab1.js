/*1. Array Object
Fill an array (5 numerical values) from the user, sort it in descending and 
ascending orders then display the output in the console.*/
var Arr2 = inPut();

var dasOrder = Arr2.sort(function(x, y) {return y - x;});
console.log("Des Order:", dasOrder);
var asOrder = Arr2.sort(function(x, y) {return x - y;});
console.log("As Order:", asOrder);

console.log("Original Array:", Arr2);




function inPut() {
    var Arr = [];
    for (var i = 0; i < 5; i++) {
        var value = parseFloat(prompt("Enter Arr Of " + (i + 1) + ":"));
        Arr.push(value);
    }
    return Arr;
}