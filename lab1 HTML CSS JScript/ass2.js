var sum = 0;
var userInput,numericValue ,user ;
var exitLoop = false;

user = prompt("Please Enter Your Name");
console.log("%cWelcome "  + user + ":","color: red;");


while (sum <= 100 && !exitLoop) {
  userInput = prompt("Enter A Numeric Value "+ sum+":"); //10

  if (userInput == 0 ) {                          //10!=0
    console.log("Invalid Input");
    exitLoop = true;
  } else {
    numericValue = parseFloat(userInput);             //numericValue =10
      if (sum + numericValue > 100) {                
        console.log("Sum Exceeds 100");
        exitLoop = true;
      } 
      else {
        sum += numericValue;
      }
  }
}
console.log("Total Sum Of Entered Values Ya " + user+ " = "+sum);

/*for(sum =0;sum <=100;) 
{ 
userInput = prompt("Enter A value "+sum +":");
if(sum+numericValue <=100 || userInput != 0) 
{
numericValue += parseFloat(userInput);
//sum++;
}
else
{
  console.log("The Total Value : "+ numericValue );
  
}
}*/