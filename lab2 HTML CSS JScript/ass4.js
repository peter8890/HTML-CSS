/*1.4 Write a script that reads from the user his info; validates and 
displays it with a welcoming message with today’s date
Use coloring format according to user’s choice. The user has to choose 
either red, green or blue color, take his choice via prompt*/
var isNameValid,isPhoneNumberValid,isMobileNumberValid,isEmailValid;

do{
    var NameregExp = /^[A-Z][a-z]+$/;
    var nameInput = prompt("Please Enter Your Name:");
    isNameValid = NameregExp.test(nameInput);
    console.log("Your Name is: " + (isNameValid ? nameInput : "Invalid"));
}
while(isNameValid == false)

do{
    var PhoneNregExp = /^[0-9]{8}$/;
    var phoneNumberInput = prompt("Please Enter Your Phone Number:");
     isPhoneNumberValid = PhoneNregExp.test(phoneNumberInput);
    console.log("Your Phone Number is: " + (isPhoneNumberValid ? phoneNumberInput : "Invalid"));
}
while(isPhoneNumberValid == false)

do{
    var MobileNregExp = /^(010|011|012|015)[0-9]{8}$/;
    var mobileNumberInput = prompt("Please Enter Your Mobile Number:");
     isMobileNumberValid = MobileNregExp.test(mobileNumberInput);
    console.log("Your Mobile Number is: " + (isMobileNumberValid ? mobileNumberInput : "Invalid"));
}
while(isMobileNumberValid == false)

do{
    var EmailRegExp = /^[A-Za-z][a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    var emailInput = prompt("Please Enter Your Email:");
     isEmailValid = EmailRegExp.test(emailInput);
    console.log("Your Email is: " + (isEmailValid ? emailInput : "Invalid"));
}
while(EmailRegExp == false)
