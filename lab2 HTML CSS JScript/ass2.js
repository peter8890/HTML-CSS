var inPut = prompt("Please Enter String :");
var Case = confirm("Do You Do Sensitivity....");
var result = palindrome(inPut, Case);

var Message = result ? "IS" : "IS NOT";
alert("The Entered String << " +inPut+ " >> "+ Message + " a palindrome.");
function palindrome(str, Case) {
    if (Case) {
        str = str.toLowerCase();
    }
    var reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}