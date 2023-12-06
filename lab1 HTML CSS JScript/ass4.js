let num1 = parseInt(prompt("Please Enter 1st Num :"));
let num2 = parseInt(prompt("Please Enter 2ed Num :"));
let opera =prompt("Please Enter opre :");

function rangeDisplay(num1,num2,opera) 
{
    let sum=0;
   if(num1>num2)
   {
    if(opera==="even")
    {
        for(num2;num2<=num1;num2++)
        {
            if(num2%2==0)
            {
                document.write(`<p>${num2} is even <p>`);
                sum +=num2;
            }
             
        }
        document.write(`<p>the sum of value ${sum}  <p>`);
    }else if(opera ==="odd"){
        for(num2;num2<=num1;num2++)
        {
            if(num2%2!=0)
            {
                document.write(`<p>${num2} is odd <p>`);
                sum +=num2;
            }
            
        }
        document.write(`<p>the sum of value ${sum}  <p>`);
    }else if(opera ==="no")
    {
        for(num2;num2<=num1;num2++)
        {
            
             document.write(`<p>${num2}  <p>`);
             sum +=num2;
        }
        document.write(`<p>the sum of value ${sum}  <p>`);
    }
   }else{
    if(opera==="even")
    {
        for(num1;num1<=num2;num1++)
        {
            if(num1%2==0)
            {
                document.write(`<p>${num1} is even <p>`);
                sum +=num1;
            }
            
        }
        document.write(`<p>the sum of value ${sum}  <p>`);
    }else if(opera ==="odd"){
        for(num1;num1<=num2;num1++)
        {
            if(num1%2 !=0)
            {
                document.write(`<p>${num1} is odd <p>`);
                sum +=num1;
            }
            
        }
        document.write(`<p>the sum of value ${sum}  <p>`);
    }else if(opera ==="no")
    {
        for(num1;num1<=num2;num1++)
        {
            
             document.write(`<p>${num1}  <p>`);
             sum +=num1;
        }
        document.write(`<p>the sum of value ${sum}  <p>`);
    }
   }
}

rangeDisplay(num1,num2,opera);