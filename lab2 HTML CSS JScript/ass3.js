/*1.3 Build your own function that takes a single string argument and 
returns the largest word in the string. If there are two or more words 
that are the same length, return the first word from the string with that 
length. 
e.g. if Input is: "this is a javascript string demo"
Output will be: javascript*/
var inPut = prompt("Please Enter String :");
var result = largestWord(inPut);
alert("The Largest Word Is : " + result)
//console.log("The Largest Word Is : "+ result);

function largestWord(input) {
    var words = input.split(/\s+/);
    var largest = "";
    var max = 0;

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var wordLength = word.replace(/[^a-zA-Z]/g, "").length;

        if (wordLength === max && words.indexOf(word) < words.indexOf(largest)) {
            largest = word;
        } else if (wordLength > max) {
            largest = word;
            max = wordLength;
        }
    }
    return largest;
}