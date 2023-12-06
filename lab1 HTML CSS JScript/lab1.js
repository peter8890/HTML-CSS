var friMess = prompt("Enter A Message");
if(friMess)
{
    for(var i = 1 ; i < 7 ; i++){
        document.write("<h"+ i + ">" + friMess + "</h" + i + "h>" );
    }
}
else
{
    document.write("<h1>Please Enter Value</h1>");
}
