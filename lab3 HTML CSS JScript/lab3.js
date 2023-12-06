/*3. Object Object
3.1. Write a function called dispVal that takes an object with two 
properties and a string as arguments. It should return the value of the 
property with key equal to the value of the string
Example: if created obj={nm:”ali”,age:10} so that if we called our 
function as dispVal(obj,”age”) its return value will be 10*/
var obj = { Name: "ali", Age: 23, Salary: 5000 };
var inPut = prompt("Please Enter (Name,Age,Salary) ")
var result = dispVal(obj, inPut);
console.log(result); 

function dispVal(obj, keyString) {
    if (obj.hasOwnProperty(keyString)) {
        alert(obj[keyString]);
        return obj[keyString];
    } 
    else
    {
        alert("NOT FOUND");
    }
}
