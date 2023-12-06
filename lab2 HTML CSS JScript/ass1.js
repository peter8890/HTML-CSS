/*1.1. Write a script that accepts a string from user through prompt and 
count the number of a specific character that the user will define in 
another prompt. Ask the user whether to consider difference between 
letter cases or not then display the number of letter appearance.*/
var inPut = prompt("Please Enter String :");
var inChar = prompt("Plaese Enter Cahr :");
var Case = confirm("Do You Want Count All....");

var Result = countCharacter(inPut, inChar, Case);
alert("Number of occurrences of << " +inChar+" >> in the string<< "+ inPut +" >> is: " + Result);

/*function countCharacter(str, char, Case) {
    if (Case) {
        str = str.toLowerCase();
        char = char.toLowerCase();
    }
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            console.log(str[i]);
            count++;
        }
    }
    return count;
}*/

function countCharacter(str, char, Case){

    if (Case) {
        str = str.toUpperCase();
        char = char.toUpperCase();
    }
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === char){
            count++;
        }


    }
   return count;
}


/*function countCharacter(str, char, Case) {
    if (Case) {
        str = str.toUpperCase();
        char = char.toUpperCase(); // Fixed typo here, changed 'str' to 'char'
    }
    
    var count = 0;
    for (var i = 0; i < str.length; i++) { // Corrected typo in 'length'
        if (str[i] === char) {
            count++;
        }
    }
    
    return count;
}*/
