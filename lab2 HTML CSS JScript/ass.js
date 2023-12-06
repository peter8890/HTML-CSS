/*test code */

var x=10;
console.log("Out Sacope x : "+x);


function fun(a=5,b=6)
{

     x=5;
    console.log("Hello");
    console.warn("In Sacope x : "+x);
    console.log("The Re In a+b+x :"+(a+b+x))

}
console.log("The Re Out x :"+(x))